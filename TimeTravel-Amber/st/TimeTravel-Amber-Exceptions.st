Smalltalk current createPackage: 'TimeTravel-Amber-Exceptions' properties: #{}!
Error subclass: #T2RequestError
	instanceVariableNames: 'xhr'
	package: 'TimeTravel-Amber-Exceptions'!

!T2RequestError methodsFor: 'accessing'!

xhr
	^ xhr
!

xhr: anObject
	xhr := anObject
! !

Error subclass: #T2SessionNotFound
	instanceVariableNames: ''
	package: 'TimeTravel-Amber-Exceptions'!

!T2SessionNotFound methodsFor: 'accessing'!

messageText
	^ 'TimeTravel session not found'
! !

