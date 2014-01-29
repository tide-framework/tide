request handling
handleCallback: aCallback data: data
	| answer response entity statusLine |
	
	answer := aCallback value: data.
	
	entity := (ZnStringEntity type: ZnMimeType applicationJson)
		string: answer timeTravelPresenter asJsonString;
		yourself.
	
	"TODO: encapsulate properly"
	statusLine := answer == aCallback receiver
		ifTrue: [ ZnStatusLine ok ]
		ifFalse:  [ ZnStatusLine created ].
	
	response := ZnResponse new
		statusLine: statusLine;
		headers: ZnHeaders defaultResponseHeaders;
		entity: entity;
		yourself.
	
	 self respond: response