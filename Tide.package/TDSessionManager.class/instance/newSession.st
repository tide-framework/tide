sessions handling
newSession
	| session |
	session := self sessionClass new.
	^ sessions at: session id put: session