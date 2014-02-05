Smalltalk createPackage: 'TimeTravel-Amber-Exceptions'!
Error subclass: #TTPromiseNotFound
	instanceVariableNames: 'selector'
	package: 'TimeTravel-Amber-Exceptions'!

!TTPromiseNotFound methodsFor: 'accessing'!

messageText
	^ 'No promise was found for selector ', self selector
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

Error subclass: #TTRequestError
	instanceVariableNames: 'xhr'
	package: 'TimeTravel-Amber-Exceptions'!

!TTRequestError methodsFor: 'accessing'!

xhr
	^ xhr
!

xhr: anObject
	xhr := anObject
! !

Error subclass: #TTSessionNotFound
	instanceVariableNames: ''
	package: 'TimeTravel-Amber-Exceptions'!

!TTSessionNotFound methodsFor: 'accessing'!

messageText
	^ 'TimeTravel session not found'
! !

