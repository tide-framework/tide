request handling
handleRequest: aRequest
	aRequest method == #GET ifTrue: [ ^ self handleGetRequest: aRequest ].
	aRequest method == #PUT ifTrue: [ ^ self handlePutRequest: aRequest ].
	self respond: (ZnResponse methodNotAllowed: aRequest)