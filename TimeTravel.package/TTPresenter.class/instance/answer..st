request handling
answer: anObject
	self respond: (ZnResponse ok: ((ZnStringEntity 
		type: (ZnMimeType predefinedInstanceAt: #applicationJson))
		string: anObject asJsonString;
		yourself))