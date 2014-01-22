request handling
handlePutRequest: aRequest
	| file |
	file := self fileForRequest: aRequest.
	file delete.
	file writeStreamDo: [ :str |
		str nextPutAll: aRequest entity string ].
	self respond: (ZnResponse ok: (ZnStringEntity text: 'ok'))