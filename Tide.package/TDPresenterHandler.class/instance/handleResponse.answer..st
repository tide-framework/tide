request handling
handleResponse: statusLine answer: answer
	| entity response |
	
	entity := (ZnStringEntity type: ZnMimeType applicationJson)
		string: answer tidePresenter asJsonString;
		yourself.	
	
	response := ZnResponse new
		statusLine: statusLine;
		headers: ZnHeaders defaultResponseHeaders;
		entity: entity;
		yourself.
		
	self respond: response