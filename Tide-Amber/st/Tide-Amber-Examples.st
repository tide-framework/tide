Smalltalk createPackage: 'Tide-Amber-Examples'!
Widget subclass: #TTCounterWidget
	instanceVariableNames: 'counter header'
	package: 'Tide-Amber-Examples'!

!TTCounterWidget methodsFor: 'accessing'!

counter
	^ counter ifNil: [ counter := TTProxy on: '/counter' ]
!

counter: aCounter
	counter := aCounter
! !

!TTCounterWidget methodsFor: 'actions'!

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

!TTCounterWidget methodsFor: 'rendering'!

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

!TTCounterWidget methodsFor: 'updating'!

update
	header contents: [ :html |
		html with: self counter count asString ]
! !

!TTCounterWidget class methodsFor: 'not yet classified'!

initialize
	"self new render"
!

on: aProxy
	^ self new
		counter: aProxy;
		yourself
! !

