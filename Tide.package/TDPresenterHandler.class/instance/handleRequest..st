request handling
handleRequest: aRequest
	self 
		withContextForRequest: aRequest
		do: [ 
			self session setModifiedOn.
			self handleCallbackForRequest: aRequest.
			self rootPresenter handleRequest: aRequest ]