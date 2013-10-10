sessions handling
newSession
	| session |
	session := TTSession new.
	^ sessions at: session id put: session