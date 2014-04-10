sessions handling
removeExpiredSessions
	self sessions 
		select: [ :each | each isExpired ]
		thenDo: [ :each | self removeSession: each ]