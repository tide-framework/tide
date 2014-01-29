Smalltalk createPackage: 'TimeTravel-Amber-Core'!
Object subclass: #TTAction
	instanceVariableNames: 'promise resolved'
	package: 'TimeTravel-Amber-Core'!

!TTAction methodsFor: 'accessing'!

client
	^ self promise client
!

promise
	^ promise
!

promise: aPromise
	promise := aPromise
! !

!TTAction methodsFor: 'resolving'!

beResolved
	resolved := true.
	self promise nextTravel
!

resolve
	self beResolved
! !

!TTAction methodsFor: 'testing'!

isResolved
	^ resolved ifNil: [ false ]
! !

!TTAction class methodsFor: 'instance creation'!

on: aPromise
	^ self new 
		promise: aPromise; 
		yourself
! !

TTAction subclass: #TTCallbackAction
	instanceVariableNames: 'callback'
	package: 'TimeTravel-Amber-Core'!

!TTCallbackAction methodsFor: 'accessing'!

callback
	^ callback
!

callback: aBlock
	callback := aBlock
! !

!TTCallbackAction methodsFor: 'resolving'!

resolve
	self client promisedValue: (self callback value: self client promisedValue).
	super resolve
! !

TTAction subclass: #TTRequestAction
	instanceVariableNames: 'requestUrl data'
	package: 'TimeTravel-Amber-Core'!

!TTRequestAction methodsFor: 'accessing'!

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

!TTRequestAction methodsFor: 'error handling'!

requestError: anObject
	TTRequestError new
		xhr: anObject;
		signal
!

sessionNotFound
	TTSessionNotFound signal
! !

!TTRequestAction methodsFor: 'private'!

newClientFromJson: json
	self client promisedValue: json asTimeTravelObject
!

updateClientFromJson: json
	self client updateFromJson: json
! !

!TTRequestAction methodsFor: 'resolving'!

handleResponse: json status: aNumber
	^ aNumber == 200 
		ifTrue: [ self updateClientFromJson: json ]
		ifFalse: [ self newClientFromJson: json ]
!

request: aString
	jQuery 
		ajax: self requestUrl
		options: #{
			'type' -> 'POST'.
			'dataType' -> 'json'.
			'data' -> #{ 'arguments' -> self data }.
			'success' -> [ :json :textStatus :xhr |
				self handleResponse: json status: xhr status.
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

Object subclass: #TTClient
	instanceVariableNames: 'state actions firstPromise promisedValue path id connected'
	package: 'TimeTravel-Amber-Core'!

!TTClient methodsFor: 'accessing'!

actions
	^ actions
!

flushPromises
	firstPromise := nil
!

future
	| promise |

	promise := TTPromise on: self.

	firstPromise 
		ifNil: [ firstPromise := promise ]
		ifNotNil: [ firstPromise next: promise ].

	^ promise
!

id
	^ id
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

!TTClient methodsFor: 'forwarding'!

handleFutureMessage: aMessage
	| selector |
	selector := aMessage selector asString.
	
	(state at: selector) 
		ifNotNil: [ ^ state at: selector ].

	(actions at: selector) 
		ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].

	^ self doesNotUnderstand: aMessage
!

then: aBlock
	self future then: aBlock
! !

!TTClient methodsFor: 'initialization'!

connect
	self isConnected ifFalse: [ self update ]
!

initialize
	super initialize.
	"Primitive JS object. I need it because I'm keeping JSON data"
	state := self newJavaScriptObject. 
	actions := self newJavaScriptObject
! !

!TTClient methodsFor: 'private'!

newJavaScriptObject
	<return {}>
! !

!TTClient methodsFor: 'testing'!

isConnected
	^ connected ifNil: [ false ]
! !

!TTClient methodsFor: 'updating'!

update
	| promise |
	promise := self future.
	promise setAction: ((TTRequestAction on: promise)
		requestUrl: self path;
		yourself).
	self future then: [ connected := true ]
!

updateActions: aDictionary
	aDictionary keysAndValuesDo: [ :key :value |
			actions at: key put: value ]
!

updateFromJson: json
	connected := true.
	
	id := json at: '__id__'.
	
	(json at: 'state') ifNotNil: [
		json state keysAndValuesDo: [ :key :value |
			state at: key put: value asTimeTravelObject ] ].
	(json at: 'actions') ifNotNil: [
		json actions keysAndValuesDo: [ :key :value |
			actions at: key put: value ] ]
!

updateState: aDictionary
	aDictionary keysAndValuesDo: [ :key :value |
			state at: key put: value ]
! !

!TTClient class methodsFor: 'instance creation'!

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

Object subclass: #TTPromise
	instanceVariableNames: 'previous next client action'
	package: 'TimeTravel-Amber-Core'!

!TTPromise methodsFor: 'accessing'!

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

!TTPromise methodsFor: 'actions'!

setRequestActionFromMessage: aMessage
	| url data |
	url := self client actions at: aMessage selector.
	data := JSON stringify: (aMessage arguments ifNil: [ #() ]).
	url 
		ifNil: [ self setChildActionFromMessage: aMessage ]
		ifNotNil: [ 
			self setAction: ((TTRequestAction on: self)
				requestUrl: url;
				data: data;
				yourself) ]
!

then: aBlock
	self isAssigned
		ifTrue: [ self client future then: aBlock ]
		ifFalse: [ self setAction: ((TTCallbackAction on: self) callback: aBlock) ]
! !

!TTPromise methodsFor: 'testing'!

isAssigned
	^ self action notNil
!

isResolved
	^ self isAssigned and: [ self action isResolved ]
! !

!TTPromise methodsFor: 'traveling'!

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

!TTPromise class methodsFor: 'instance creation'!

on: aClient
	^ self new
		client: aClient;
		yourself
! !

ProtoObject subclass: #TTProxy
	instanceVariableNames: 'client'
	package: 'TimeTravel-Amber-Core'!

!TTProxy methodsFor: 'accessing'!

xxxClient
	^ client
!

xxxClient: aClient
	client := aClient
! !

!TTProxy methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	^ (self xxxClient respondsTo: aMessage selector)
		ifTrue: [ aMessage sendTo: self xxxClient ]
		ifFalse: [ self xxxClient handleFutureMessage: aMessage ]
! !

!TTProxy methodsFor: 'initialization'!

initialize
	super initialize.
	"self inheritedSelectors do: [ :each |
		self removeSelector: each asSelector ]"
! !

!TTProxy methodsFor: 'private'!

inheritedSelectors
	^ self class allSelectors
		reject: [ :each | TTProxy methodDictionary keys includes: each ]
!

removeSelector: aString
	<delete self[aString];>
! !

!TTProxy class methodsFor: 'instance creation'!

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
		xxxClient: (TTClient on: aPath);
		initialize
! !

!Array methodsFor: '*TimeTravel-Amber-Core'!

asTimeTravelObject
	^ self collect: [ :each | each asTimeTravelObject ]
! !

!HashedCollection methodsFor: '*TimeTravel-Amber-Core'!

asTimeTravelObject
	| dictionary |
	dictionary := self class new.
	self keysAndValuesDo: [ :key :value | 
		dictionary at: key put: value asTimeTravelObject ].
		
	^ dictionary
! !

!JSObjectProxy methodsFor: '*TimeTravel-Amber-Core'!

asTimeTravelObject
	^ TTProxy client: (TTClient fromJson: self)
! !

!Object methodsFor: '*TimeTravel-Amber-Core'!

asTimeTravelObject
	^ self
! !

