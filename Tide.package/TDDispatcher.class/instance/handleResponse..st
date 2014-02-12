request handling
handleResponse: aResponse
	self context ifNotNil: [
		self useCookies ifTrue: [
			aResponse addCookie: (ZnCookie 
				name: self sessionCookie 
				value: self session id) ] ].
	^ aResponse