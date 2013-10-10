request handling
handleRequest: aRequest
	self 
		withContext: (self contextForRequest: aRequest)
		do: [ 
			self handleCallbackForRequest: aRequest.
			self rootPresenter handleRequest: aRequest ]