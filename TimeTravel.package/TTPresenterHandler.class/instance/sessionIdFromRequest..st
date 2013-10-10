request handling
sessionIdFromRequest: aRequest
	^ aRequest uri 
		queryAt: self dispatcher sessionField 
		ifAbsent: [ self sessionIfFromCookies: aRequest cookies ]