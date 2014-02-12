request handling
contextForRequest: aRequest
	^ TDContext new
		request: aRequest;
		session: (self sessionForRequest: aRequest);
		yourself