request handling
handleException: anError
	TDServer server debugMode 
		ifTrue: [ anError signal ]
		ifFalse: [ 
			self 
				handleResponse: (ZnStatusLine code: 202)
				answer: (TDExceptionPresenter fromError: anError) ]