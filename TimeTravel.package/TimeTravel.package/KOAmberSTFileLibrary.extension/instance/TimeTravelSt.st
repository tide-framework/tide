*TimeTravel
TimeTravelSt
	^ 'Smalltalk current createPackage: ''TimeTravel'' properties: #{}!
Widget subclass: #TTCounter
	instanceVariableNames: ''counter header''
	category: ''TimeTravel''!

!TTCounter methodsFor: ''accessing''!

counter
	^ counter
! !

!TTCounter methodsFor: ''actions''!

increase
	self counter future increase.
	self counter future do: [ self update ].
	self counter travel
!

decrease
	self counter future decrease.
	self counter future do: [ self update ].
	self counter travel
! !

!TTCounter methodsFor: ''initialization''!

initialize
	super initialize.
	counter := TTPresenter on: ''/examples/json-counter''
! !

!TTCounter methodsFor: ''rendering''!

render
	self counter future
		connect;
		do: [ self appendToJQuery: ''body'' asJQuery ].
	self counter travel
!

renderOn: html
	header := html h1 with: self counter count asString.
	html button 
		with: ''++'';
		onClick: [ self increase ].
	html button 
		with: ''--'';
		onClick: [ self decrease ]
! !

!TTCounter methodsFor: ''updating''!

update
	header contents: [ :html |
		html with: self counter count asString ]
! !

Object subclass: #TTResolver
	instanceVariableNames: ''promise''
	category: ''TimeTravel''!

!TTResolver methodsFor: ''accessing''!

promise
	^ promise
!

promise: aPromise
	promise := aPromise
!

component
	^ self promise component
! !

!TTResolver methodsFor: ''resolving''!

resolve
	self subclassResponsibility
! !

!TTResolver methodsFor: ''travelling''!

nextTravel
	self promise next ifNotNil: [ self promise next stepTravel ]
!

stepTravel
	self subclassResponsibility
! !

!TTResolver class methodsFor: ''instance creation''!

on: aPromise
	^ self new 
		promise: aPromise;
		yourself
! !

Object subclass: #TTPromise
	instanceVariableNames: ''futureMaker next actionBlock selector resolver''
	category: ''TimeTravel''!

!TTPromise methodsFor: ''accessing''!

component
	^ self futureMaker component
!

next
	^ next
!

next: aPromise
	next 
		ifNil: [ next := aPromise ]
		ifNotNil: [ next next: aPromise ]
!

futureMaker
	^ futureMaker
!

futureMaker: aFutureMaker
	futureMaker := aFutureMaker
! !

!TTPromise methodsFor: ''error handling''!

doesNotUnderstand: aMessage
	self isAssigned
		ifFalse: [ self selector: aMessage selector ]
		ifTrue: [ self futureMaker nextPromise selector: aMessage selector ]
! !

!TTPromise methodsFor: ''resolving''!

resolve
	self isResolved ifFalse: [
		self resolveUrl ]
!

connect
	resolver := (TTRequestResolver on: self)
		requestUrl: self component path;
		yourself
!

resolveAction
	actionBlock 
		ifNil: [ self error: ''Unable to resolve promise'' ]
		ifNotNil: [ resolver := (TTActionResolver on: self)
			action: actionBlock;
			yourself ]
!

resolveUrl
	| url |
	url := (self component actions at: selector) ifNil: [ ^ self resolveAction ].
	resolver := (TTRequestResolver on: self)
		requestUrl: url;
		yourself
!

do: aBlock
	self isAssigned
		ifTrue: [ self futureMaker nextPromise do: aBlock ]
		ifFalse: [ actionBlock := aBlock ]
!

selector: aString
	selector := aString
! !

!TTPromise methodsFor: ''testing''!

isResolved
	^ resolver notNil
!

isAssigned
	^ self isResolved or: [
		actionBlock notNil or: [ 
			selector notNil ]]
! !

!TTPromise methodsFor: ''travelling''!

travel
	self futureMaker travel
!

stepTravel
	self resolve.
	resolver stepTravel
! !

!TTPromise class methodsFor: ''instance creation''!

on: aFutureMaker
	^ self new
		futureMaker: aFutureMaker;
		yourself
! !

Object subclass: #TTFutureMaker
	instanceVariableNames: ''component promise''
	category: ''TimeTravel''!

!TTFutureMaker methodsFor: ''accessing''!

component
	^ component
!

component: aComponent
	component := aComponent
! !

!TTFutureMaker methodsFor: ''promises''!

nextPromise
	| nextPromise |
	nextPromise := TTPromise on: self.
	promise 
		ifNil: [ promise := nextPromise ]
		ifNotNil: [ promise next: nextPromise ].
	^ nextPromise
!

reset
	promise := nil
! !

!TTFutureMaker methodsFor: ''travelling''!

travel
	promise ifNotNil: [
		promise stepTravel.
		promise := nil ]
! !

!TTFutureMaker class methodsFor: ''instance creation''!

on: aComponent
	^ self new
		component: aComponent;
		yourself
! !

Object subclass: #TTPresenter
	instanceVariableNames: ''path state actions children futureMaker''
	category: ''TimeTravel''!

!TTPresenter methodsFor: ''accessing''!

futureMaker
	^ futureMaker ifNil: [ futureMaker := TTFutureMaker on: self ]
!

actions
	^ actions copy
!

children
	^ children copy
!

state
	^ state copy
!

path
	^ path
!

path: aString
	path := aString
! !

!TTPresenter methodsFor: ''error handling''!

doesNotUnderstand: aMessage
	| selector |
	selector := aMessage selector asString.
	(state at: selector) ifNotNil: [ ^ state at: selector ].
	(children at: selector) ifNotNil: [ ^ children at: selector ].
	^ super doesNotUnderstand: aMessage
! !

!TTPresenter methodsFor: ''futures''!

future
	^ self futureMaker nextPromise
! !

!TTPresenter methodsFor: ''initialization''!

initialize
	super initialize.
	"Primitive JS object. I need it because I''m keeping JSON data"
	state := <{}>. 
	actions := <{}>.
	children := #()
! !

!TTPresenter methodsFor: ''travelling''!

travel
	self futureMaker travel
! !

!TTPresenter methodsFor: ''updating''!

updateFromJson: json
	json state keysAndValuesDo: [ :key :value |
		state at: key put: value ].
	json actions keysAndValuesDo: [ :key :value |
		actions at: key put: value ].
	children := json children collect: [ :each |
		self class fromJson: each ]
! !

!TTPresenter class methodsFor: ''instance creation''!

on: aString
	^ self new 
		path: aString;
		yourself
!

fromJson: json
	^ self new
		updateFromJson: json;
		yourself
! !

TTResolver subclass: #TTActionResolver
	instanceVariableNames: ''action''
	category: ''TimeTravel''!

!TTActionResolver methodsFor: ''accessing''!

action
	^ action
!

action: aBlock
	action := aBlock
! !

!TTActionResolver methodsFor: ''travelling''!

stepTravel
	action value: self component.
	self nextTravel
! !

TTResolver subclass: #TTRequestResolver
	instanceVariableNames: ''requestUrl''
	category: ''TimeTravel''!

!TTRequestResolver methodsFor: ''accessing''!

requestUrl
	^ requestUrl
!

requestUrl: aString
	requestUrl := aString
! !

!TTRequestResolver methodsFor: ''travelling''!

stepTravel
	jQuery 
		ajax: self requestUrl
		options: #{
			''dataType'' -> ''json''.
			''success'' -> [ :data |
				self updateComponentWith: data.
				self nextTravel ]
		}
! !

!TTRequestResolver methodsFor: ''updating''!

updateComponentWith: json
	self component updateFromJson: json
! !

!JSObjectProxy methodsFor: ''*TimeTravel''!

keysAndValuesDo: aBlock
	<
		for(var key in self[''@jsObject'']) {
			aBlock._value_value_(key, self[''@jsObject''][key]);
		}
	>
! !

'