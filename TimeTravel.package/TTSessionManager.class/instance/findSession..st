sessions handling
findSession: anId
	| session |
	
	session := sessions 
		at: anId 
		ifAbsent: [ ^ self newSession ].
	session isExpired ifTrue: [ ^ self newSession ].
	
	^ session