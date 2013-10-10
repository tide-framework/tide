request handling
handleCallback: aCallback data: data
	
	aCallback value: data.
	
	self respond: (ZnResponse ok: ((ZnStringEntity 
		type: ZnMimeType applicationJson)
		string: aCallback receiver asJsonString;
		yourself))