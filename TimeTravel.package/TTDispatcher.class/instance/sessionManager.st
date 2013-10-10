accessing
sessionManager
	^ sessionManager ifNil: [ sessionManager := TTSessionManager new ]