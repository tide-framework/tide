request handling
handleException: anError  
	self 
		handleResponse: (ZnStatusLine code: 202)
		answer: (TTExceptionPresenter fromError: anError)