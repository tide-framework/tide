request handling
withContextForRequest: aRequest do: aBlock
	self 
		withContext: (self contextForRequest: aRequest)
		do: aBlock