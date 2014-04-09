sessions handling
removeSession: aSession 
	sessions removeKey: aSession id ifAbsent: [ ]