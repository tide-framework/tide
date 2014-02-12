request handling
handleRequest: aRequest
	self respond: (ZnResponse ok: (ZnEntity html: aRequest uri asString))