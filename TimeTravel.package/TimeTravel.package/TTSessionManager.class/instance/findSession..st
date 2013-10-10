sessions handling
findSession: anId
	| session |
	
	session := sessions 
		at: anId 
		ifAbsent: [ self sessionNotFound ].
	session isExpired ifTrue: [ self sessionNotFound ].
	
	^ session