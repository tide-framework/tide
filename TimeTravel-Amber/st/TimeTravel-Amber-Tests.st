Smalltalk current createPackage: 'TimeTravel-Amber-Tests'!
TestCase subclass: #TTClientTest
	instanceVariableNames: 'client'
	package: 'TimeTravel-Amber-Tests'!

!TTClientTest methodsFor: 'initialization'!

setUp
	client := TTClient new
!

tearDown
	"Buggy, uncomment later.
	
	client := nil"
! !

!TTClientTest methodsFor: 'tests'!

testForwarding
	"| client |"
	client := TTProxy client: (TTClient new).

	self should: [ client count ] raise: MessageNotUnderstood.	

	client xxxClient updateFromJson: (JSON parse: '{"state": {"count": 1}}').
	self assert: client count equals: 1.

	client xxxClient updateFromJson: (JSON parse: '{"state": {"count": 2}}').
	self assert: client count equals: 2
!

testFuture
	| p1 p2 p3 |

	p1 := client future.
	p2 := p1 future.
	p3 := client future.

	self assert: p1 previous equals: nil.
	self assert: p1 next equals: p2.
	
	self assert: p2 previous equals: p1.
	self assert: p2 next equals: p3.

	self assert: p3 previous equals: p2.
	self assert: p3 next equals: nil
! !

TTProxy subclass: #TTMockProxy
	instanceVariableNames: 'catchedSelectors'
	package: 'TimeTravel-Amber-Tests'!

!TTMockProxy methodsFor: 'accessing'!

catchedSelectors
	^ catchedSelectors
! !

!TTMockProxy methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	catchedSelectors add: aMessage selector
! !

!TTMockProxy methodsFor: 'initialization'!

initialize
	super initialize.
	catchedSelectors := #()
! !

TestCase subclass: #TTProxyTest
	instanceVariableNames: ''
	package: 'TimeTravel-Amber-Tests'!

!TTProxyTest methodsFor: 'tests'!

testDNU
	| proxy |
	proxy := TTMockProxy new.

	proxy yourself.
	self assert: (proxy catchedSelectors includes: 'yourself').

	proxy catchedSelectors.
	self deny: (proxy catchedSelectors includes: 'catchedSelectors').
!

testInheritedSelectors
	| proxy |

	proxy := TTProxy basicNew.

	self assert: (proxy inheritedSelectors includes: 'isNil').
	self deny: (proxy inheritedSelectors includes: 'xxxClient')
!

testxxxClient
	| proxy client |
	
	client := TTClient new.
	proxy := TTProxy client: client.

	self assert: proxy xxxClient == client.
	self assert: proxy yourself == client.
! !

