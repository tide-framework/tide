Smalltalk createPackage: 'Tide-Amber-Exceptions'!
Error subclass: #TTPromiseNotFound
	instanceVariableNames: 'selector'
	package: 'Tide-Amber-Exceptions'!

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
	package: 'Tide-Amber-Exceptions'!

!TTRequestError methodsFor: 'accessing'!

xhr
	^ xhr
!

xhr: anObject
	xhr := anObject
! !

Error subclass: #TTServerError
	instanceVariableNames: 'code'
	package: 'Tide-Amber-Exceptions'!

!TTServerError methodsFor: 'accessing'!

code
	^ code
!

code: aString 
	code := aString.
! !

Error subclass: #TTSessionNotFound
	instanceVariableNames: ''
	package: 'Tide-Amber-Exceptions'!

!TTSessionNotFound methodsFor: 'accessing'!

messageText
	^ 'Tide session not found'
! !

