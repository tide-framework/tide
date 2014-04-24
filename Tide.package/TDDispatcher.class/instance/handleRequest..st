request handling
handleRequest: aRequest
	[ 
		[
			self dispatch: aRequest
		]	
			on: TDSessionError
			do: [ :ex | self handleSessionError: aRequest ]
	]
		on: TDResponseNotification 
		do: [ :n | ^ self handleResponse: n response ]
	