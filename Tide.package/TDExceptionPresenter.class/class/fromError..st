instance creation
fromError: anError 
	^ self new 
		code: anError className;
		messageText: anError messageText;
		yourself