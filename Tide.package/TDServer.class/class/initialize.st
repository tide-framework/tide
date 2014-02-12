class initialization
initialize
	super initialize.
	serverStarted := false.
	Smalltalk 	
		addToStartUpList: self;
		addToShutDownList: self