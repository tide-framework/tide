request handling
contextForRequest: aRequest
	^ TTContext new
		request: aRequest;
		session: (self sessionForRequest: aRequest);
		yourself