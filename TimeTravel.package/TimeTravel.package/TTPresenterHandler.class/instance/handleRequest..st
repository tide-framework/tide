request handling
handleRequest: aRequest
	self 
		withContext: (self contextForRequest: aRequest)
		do: [ 
			self session setModifiedOn.
			self handleCallbackForRequest: aRequest.
			self rootPresenter handleRequest: aRequest ]