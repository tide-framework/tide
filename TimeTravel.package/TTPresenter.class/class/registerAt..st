registration
registerAt: aString
	(self handlerClass path: aString)
		rootPresenterClass: self;
		register