request handling
sessionForRequest: aRequest
	^ self sessionManager findSession: ((self sessionIdFromRequest: aRequest)
		ifNil: [ ^ self sessionManager newSession ])