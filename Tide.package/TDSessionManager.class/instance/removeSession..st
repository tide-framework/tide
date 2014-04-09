sessions handling
removeSession: aSession 
	self sessions removeKey: aSession id ifAbsent: [ ]