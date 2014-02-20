sessions handling
findSession: anId
	| session |
	
	session := sessions 
		at: anId 
		ifAbsent: [ ^ self newSession ].
	session isExpired ifTrue: [ 
		self removeSession: session.
		TDSessionExpired new
			session: session;
			signal ].
	
	^ session