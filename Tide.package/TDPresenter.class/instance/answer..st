request handling
answer: anObject
	self respond: (ZnResponse ok: ((ZnStringEntity
		type: (ZnMimeType applicationJson
			setCharSetUTF8;
			yourself))
		string: anObject asJsonString;
		yourself))