request handling
dispatch: aRequest
	(self handlerFor: aRequest)
		ifNotNil: [ :handler | handler handleRequest: aRequest ].
		
	self defaultHandler
		ifNil: [ self notFound: aRequest ]
		ifNotNil: [ :handler |	handler handleRequest: aRequest ]