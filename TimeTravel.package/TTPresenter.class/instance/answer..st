request handling
answer: anObject
	self respond: (ZnResponse ok: ((ZnStringEntity 
		type: ZnMimeType applicationJson)
		string: anObject asJsonString;
		yourself))