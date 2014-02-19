request handling
handlePutRequest: aRequest
	| file |
	
	self isDevelopmentMode ifFalse: [ 
		self respond:  ZnResponse forbidden ].
	
	file := self fileForRequest: aRequest.
	file exists ifTrue: [ file delete ].
	file writeStreamDo: [ :str |
		str nextPutAll: aRequest entity string ].
	self respond: (ZnResponse ok: (ZnStringEntity text: 'ok'))