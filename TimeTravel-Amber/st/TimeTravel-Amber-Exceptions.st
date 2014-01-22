Smalltalk current createPackage: 'TimeTravel-Amber-Exceptions'!
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

