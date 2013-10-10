request handling
handleRequest: aRequest
	[ 
		[
			self dispatch: aRequest
		]	
			on: TTSessionNotFound 
			do: [ :ex | self handleExpired: aRequest ]
	]
		on: TTResponseNotification 
		do: [ :n | ^ self handleResponse: n response ]
	