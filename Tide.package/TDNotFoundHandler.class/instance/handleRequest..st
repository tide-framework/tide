request handling
handleRequest: aRequest
	self respond: (ZnResponse notFound: aRequest uri)