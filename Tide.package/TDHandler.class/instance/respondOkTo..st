request handling
respondOkTo: aRequest
	self respond: (ZnResponse ok: (ZnEntity html: aRequest uri asString))