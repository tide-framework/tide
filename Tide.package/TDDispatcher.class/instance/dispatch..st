request handling
dispatch: aRequest
	(self handlerFor: aRequest) 
		ifNil: [ self notFound: aRequest ]
		ifNotNil: [ :handler | handler handleRequest: aRequest ]