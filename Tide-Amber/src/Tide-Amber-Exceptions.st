Smalltalk createPackage: 'Tide-Amber-Exceptions'!
Error subclass: #TDPromiseNotFound
	instanceVariableNames: 'selector'
	package: 'Tide-Amber-Exceptions'!

!TDPromiseNotFound methodsFor: 'accessing'!

messageText
	^ 'No promise was found for selector ', self selector
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

Error subclass: #TDRequestError
	instanceVariableNames: 'xhr'
	package: 'Tide-Amber-Exceptions'!

!TDRequestError methodsFor: 'accessing'!

xhr
	^ xhr
!

xhr: anObject
	xhr := anObject
! !

Error subclass: #TDServerError
	instanceVariableNames: 'code'
	package: 'Tide-Amber-Exceptions'!

!TDServerError methodsFor: 'accessing'!

code
	^ code
!

code: aString 
	code := aString.
! !

Error subclass: #TDSessionError
	instanceVariableNames: ''
	package: 'Tide-Amber-Exceptions'!

!TDSessionError methodsFor: 'accessing'!

messageText
	^ 'Tide session error'
! !

