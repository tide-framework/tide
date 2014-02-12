sessions handling
newSession
	| session |
	session := TDSession new.
	^ sessions at: session id put: session