request handling
handleSessionError: aRequest
	| response |
	
	response := ZnResponse new
		statusLine: (ZnStatusLine code: 408);
		headers: ZnHeaders defaultResponseHeaders;
		entity: (ZnStringEntity text: 'Session error');
		yourself.
		
	self useCookies ifTrue: [
		response addCookie: (ZnCookie name: self sessionCookie value: '') ].
	
	self respond: response