sessions handling
findSession: anId
	^ sessions 
		at: anId 
		ifAbsent: [ self sessionNotFound ]