Smalltalk current createPackage: 'TimeTravel-Amber-Core'!
Object subclass: #T2Action
	instanceVariableNames: 'promise resolved'
	package: 'TimeTravel-Amber-Core'!

!T2Action methodsFor: 'accessing'!

client
	^ self promise client
!

promise
	^ promise
!

promise: aPromise
	promise := aPromise
! !

!T2Action methodsFor: 'resolving'!

beResolved
	resolved := true.
	self promise nextTravel
!

resolve
	self beResolved
! !

!T2Action methodsFor: 'testing'!

isResolved
	^ resolved ifNil: [ false ]
! !

!T2Action class methodsFor: 'instance creation'!

on: aPromise
	^ self new 
		promise: aPromise; 
		yourself
! !

T2Action subclass: #T2CallbackAction
	instanceVariableNames: 'callback'
	package: 'TimeTravel-Amber-Core'!

!T2CallbackAction methodsFor: 'accessing'!

callback
	^ callback
!

callback: aBlock
	callback := aBlock
! !

!T2CallbackAction methodsFor: 'resolving'!

resolve
	self client promisedValue: (self callback value: self client promisedValue).
	super resolve
! !

T2Action subclass: #T2RequestAction
	instanceVariableNames: 'requestUrl data'
	package: 'TimeTravel-Amber-Core'!

!T2RequestAction methodsFor: 'accessing'!

data
	^ data
!

data: json
	data := json
!

requestUrl
	^ requestUrl
!

requestUrl: aString
	requestUrl := aString
! !

!T2RequestAction methodsFor: 'error handling'!

requestError: anObject
	T2RequestError new
		xhr: anObject;
		signal
!

sessionNotFound
	T2SessionNotFound signal
! !

!T2RequestAction methodsFor: 'resolving'!

handleResponse: json
	self client updateFromJson: json
!

request: aString
	jQuery 
		ajax: self requestUrl
		options: #{
			'type' -> 'POST'.
			'dataType' -> 'json'.
			'data' -> #{ 'arguments' -> self data }.
			'success' -> [ :json |
				self handleResponse: json.
				self beResolved ].
			'error' -> [ :ex |
				ex status = 408 
					ifTrue: [ self sessionNotFound ]
					ifFalse: [ self requestError: ex ] ]
		}
!

resolve
	self request: self requestUrl
! !

T2RequestAction subclass: #T2ChildAction
	instanceVariableNames: ''
	package: 'TimeTravel-Amber-Core'!

!T2ChildAction methodsFor: 'resolving'!

handleResponse: json
	self client promisedValue: (T2Proxy client: (T2Client fromJson: json))
! !

Object subclass: #T2Client
	instanceVariableNames: 'state actions children firstPromise promisedValue path connected'
	package: 'TimeTravel-Amber-Core'!

!T2Client methodsFor: 'accessing'!

actions
	^ actions
!

children
	^ children
!

flushPromises
	firstPromise := nil
!

future
	| promise |

	promise := T2Promise on: self.

	firstPromise 
		ifNil: [ firstPromise := promise ]
		ifNotNil: [ firstPromise next: promise ].

	^ promise
!

newJavaScriptObject
	<return {}>
!

path
	^ path
!

path: aString
	path := aString
!

promisedValue
	^ promisedValue
!

promisedValue: anObject
	promisedValue := anObject
!

state
	^ state
! !

!T2Client methodsFor: 'forwarding'!

handleFutureMessage: aMessage
	| selector |
	selector := aMessage selector asString.
	
	(state at: selector) 
		ifNotNil: [ ^ state at: selector ].

	(actions at: selector) 
		ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].

	(children at: selector) 
		ifNotNil: [ ^ self future setChildActionFromMessage: aMessage ].

	^ self doesNotUnderstand: aMessage
!

then: aBlock
	self future then: aBlock
! !

!T2Client methodsFor: 'initialization'!

connect
	self isConnected ifFalse: [ self update ]
!

initialize
	super initialize.
	"Primitive JS object. I need it because I'm keeping JSON data"
	state := self newJavaScriptObject. 
	actions := self newJavaScriptObject.
	children := self newJavaScriptObject
! !

!T2Client methodsFor: 'testing'!

isConnected
	^ connected ifNil: [ false ]
! !

!T2Client methodsFor: 'updating'!

update
	| promise |
	promise := self future.
	promise setAction: ((T2RequestAction on: promise)
		requestUrl: self path;
		yourself).
	self future then: [ connected := true ]
!

updateFromJson: json
	connected := true.
	
	(json at: 'state') ifNotNil: [
		json state keysAndValuesDo: [ :key :value |
			state at: key put: value ] ].
	(json at: 'actions') ifNotNil: [
		json actions keysAndValuesDo: [ :key :value |
			actions at: key put: value ] ].
	(json at: 'children') ifNotNil: [
		json children keysAndValuesDo: [ :key :value |
			children at: key put: value ] ]
! !

!T2Client class methodsFor: 'instance creation'!

fromJson: json
	^ self new
		updateFromJson: json;
		yourself
!

on: aString
	^ self new
		path: aString;
		yourself
! !

Object subclass: #T2Promise
	instanceVariableNames: 'previous next client action'
	package: 'TimeTravel-Amber-Core'!

!T2Promise methodsFor: 'accessing'!

action
	^ action
!

client
	^ client
!

client: aClient
	client := aClient
!

future
	^ self client future
!

next
	^ next
!

next: aPromise
	next 
		ifNil: [ 
			next := aPromise. 
			aPromise previous: self ]
		ifNotNil: [ 
			next next: aPromise ]
!

previous
	^ previous
!

previous: aPromise
	previous := aPromise
!

setAction: anAction
	action := anAction.
	self travel
! !

!T2Promise methodsFor: 'actions'!

setChildActionFromMessage: aMessage
	| url data |
	url := self client children at: aMessage selector.
	data := JSON stringify: (aMessage arguments ifNil: [ #() ]).
	url 
		ifNil: [ self error: 'Unable to resolve promise' ]
		ifNotNil: [ 
			self setAction: ((T2ChildAction on: self)
				requestUrl: url;
				data: data;
				yourself) ]
!

setRequestActionFromMessage: aMessage
	| url data |
	url := self client actions at: aMessage selector.
	data := JSON stringify: (aMessage arguments ifNil: [ #() ]).
	url 
		ifNil: [ self setChildActionFromMessage: aMessage ]
		ifNotNil: [ 
			self setAction: ((T2RequestAction on: self)
				requestUrl: url;
				data: data;
				yourself) ]
!

then: aBlock
	self isAssigned
		ifTrue: [ 
			self client future then: aBlock ]
		ifFalse: [
			self setAction: ((T2CallbackAction on: self) callback: aBlock) ]
! !

!T2Promise methodsFor: 'testing'!

isAssigned
	^ self action notNil
!

isResolved
	^ self isAssigned and: [ self action isResolved ]
! !

!T2Promise methodsFor: 'traveling'!

nextTravel
	self next 
		ifNil: [ self client flushPromises ]
		ifNotNil: [ self next stepTravel ]
!

stepTravel
	self action 
		ifNil: [ self nextTravel ]
		ifNotNil: [ self action resolve ]
!

travel
	(self previous isNil or: [ self previous isResolved ]) 
		ifTrue: [ self stepTravel ]
! !

!T2Promise class methodsFor: 'instance creation'!

on: aClient
	^ self new
		client: aClient;
		yourself
! !

Object subclass: #T2Proxy
	instanceVariableNames: 'client'
	package: 'TimeTravel-Amber-Core'!

!T2Proxy methodsFor: 'accessing'!

inheritedSelectors
	| selectors methods |

	methods := self basicAt: 'inheritedMethods'.
	selectors := #().
"	<for(var selector in methods) {selectors.push(selector)}>."

	selectors := selectors 
		reject: [ :each | self class methodDictionary keys includes: each ].

	^ selectors
!

xxxClient
	^ client
!

xxxClient: aClient
	client := aClient
! !

!T2Proxy methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	^ (self xxxClient respondsTo: aMessage selector)
		ifTrue: [ aMessage sendTo: self xxxClient ]
		ifFalse: [ self xxxClient handleFutureMessage: aMessage ]
! !

!T2Proxy methodsFor: 'initialization'!

initialize
	super initialize.
! !

!T2Proxy class methodsFor: 'instance creation'!

client: aClient
	"Do not add yourself here.
	It is not understood by the proxy after sending #initialize, therefore it returns aClient"

	^ self basicNew
		xxxClient: aClient;
		initialize
!

on: aPath
	"Do not add yourself here.
	It is not understood by the proxy after sending #initialize, therefore it returns aPath"

	^ self basicNew
		xxxClient: (T2Client on: aPath);
		initialize
! !

