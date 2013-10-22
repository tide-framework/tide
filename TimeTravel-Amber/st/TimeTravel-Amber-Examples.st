Smalltalk current createPackage: 'TimeTravel-Amber-Examples'!
Widget subclass: #T2CounterWidget
	instanceVariableNames: 'counter header'
	package: 'TimeTravel-Amber-Examples'!

!T2CounterWidget methodsFor: 'accessing'!

counter
	^ counter ifNil: [ counter := T2Proxy on: '/counter' ]
!

counter: aCounter
	counter := aCounter
! !

!T2CounterWidget methodsFor: 'actions'!

addNewCounter
	self counter otherCounter then: [ :proxy | 
		(self class on: proxy) render ]
!

decrease
	self counter decrease.
	self counter then: [ self update ]
!

increase
	self counter increase.
	self counter then: [ self update ]
! !

!T2CounterWidget methodsFor: 'rendering'!

render
	self counter connect.
	self counter then: [ 
		self appendToJQuery: 'body' asJQuery ]
!

renderOn: html
	header := html h1 with: self counter count asString.
	html button 
		with: '++';
		onClick: [ self increase ].
	html button 
		with: '--';
		onClick: [ self decrease ].
	html br.
	html a
		with: 'add a new counter';
		onClick: [ self addNewCounter ]
! !

!T2CounterWidget methodsFor: 'updating'!

update
	header contents: [ :html |
		html with: self counter count asString ]
! !

!T2CounterWidget class methodsFor: 'not yet classified'!

initialize
	self new render
!

on: aProxy
	^ self new
		counter: aProxy;
		yourself
! !

