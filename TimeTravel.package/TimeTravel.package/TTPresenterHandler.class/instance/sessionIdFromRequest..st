request handling
sessionIdFromRequest: aRequest
	^ self dispatcher useCookies 
		ifFalse: [ aRequest uri 
			queryAt: self dispatcher sessionField
			ifAbsent: [ nil ] ] 
		ifTrue: [ self sessionIdFromCookies: aRequest cookies ]