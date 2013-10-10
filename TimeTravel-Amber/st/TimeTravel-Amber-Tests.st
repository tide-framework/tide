Smalltalk current createPackage: 'TimeTravel-Amber-Tests' properties: #{}!
TestCase subclass: #T2ClientTest
	instanceVariableNames: 'client'
	package: 'TimeTravel-Amber-Tests'!

!T2ClientTest methodsFor: 'initialization'!

setUp
	client := T2Client new
!

tearDown
	"Buggy, uncomment later.
	
	client := nil"
! !

!T2ClientTest methodsFor: 'tests'!

testForwarding
	| client |
	client := T2Proxy client: (T2Client new).

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

T2Proxy subclass: #T2MockProxy
	instanceVariableNames: 'catchedSelectors'
	package: 'TimeTravel-Amber-Tests'!

!T2MockProxy methodsFor: 'accessing'!

catchedSelectors
	^ catchedSelectors
! !

!T2MockProxy methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	catchedSelectors add: aMessage selector
! !

!T2MockProxy methodsFor: 'initialization'!

initialize
	super initialize.
	catchedSelectors := #()
! !

TestCase subclass: #T2ProxyTest
	instanceVariableNames: ''
	package: 'TimeTravel-Amber-Tests'!

!T2ProxyTest methodsFor: 'tests'!

testDNU
	| proxy |
	proxy := T2MockProxy new.

	proxy yourself.
	self assert: (proxy catchedSelectors includes: 'yourself').

	proxy catchedSelectors.
	self deny: (proxy catchedSelectors includes: 'catchedSelectors').
!

testInheritedSelectors
	| proxy |

	proxy := T2Proxy basicNew.

	self assert: (proxy inheritedSelectors includes: 'isNil').
	self deny: (proxy inheritedSelectors includes: 'xxxClient')
!

testxxxClient
	| proxy client |
	
	client := T2Client new.
	proxy := T2Proxy client: client.

	self assert: proxy xxxClient == client.
	self assert: proxy yourself == client.
! !

