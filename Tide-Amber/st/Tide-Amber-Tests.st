Smalltalk current createPackage: 'Tide-Amber-Tests'!
TestCase subclass: #TDClientTest
	instanceVariableNames: 'client'
	package: 'Tide-Amber-Tests'!

!TDClientTest methodsFor: 'initialization'!

setUp
	client := TDClient new
!

tearDown
	"Buggy, uncomment later.
	
	client := nil"
! !

!TDClientTest methodsFor: 'tests'!

testForwarding
	"| client |"
	client := TDProxy client: (TDClient new).

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

TDProxy subclass: #TDMockProxy
	instanceVariableNames: 'catchedSelectors'
	package: 'Tide-Amber-Tests'!

!TDMockProxy methodsFor: 'accessing'!

catchedSelectors
	^ catchedSelectors
! !

!TDMockProxy methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	catchedSelectors add: aMessage selector
! !

!TDMockProxy methodsFor: 'initialization'!

initialize
	super initialize.
	catchedSelectors := #()
! !

TestCase subclass: #TDProxyTest
	instanceVariableNames: ''
	package: 'Tide-Amber-Tests'!

!TDProxyTest methodsFor: 'tests'!

testDNU
	| proxy |
	proxy := TDMockProxy new.

	proxy yourself.
	self assert: (proxy catchedSelectors includes: 'yourself').

	proxy catchedSelectors.
	self deny: (proxy catchedSelectors includes: 'catchedSelectors').
!

testInheritedSelectors
	| proxy |

	proxy := TDProxy basicNew.

	self assert: (proxy inheritedSelectors includes: 'isNil').
	self deny: (proxy inheritedSelectors includes: 'xxxClient')
!

testxxxClient
	| proxy client |
	
	client := TDClient new.
	proxy := TDProxy client: client.

	self assert: proxy xxxClient == client.
	self assert: proxy yourself == client.
! !

