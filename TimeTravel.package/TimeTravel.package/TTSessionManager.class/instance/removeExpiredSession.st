sessions handling
removeExpiredSession
	self sessions 
		select: [ :each | each isExpired ]
		thenDo: [ :each | self removeSession: each ]