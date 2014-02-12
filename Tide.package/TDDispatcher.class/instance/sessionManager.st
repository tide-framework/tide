accessing
sessionManager
	^ sessionManager ifNil: [ sessionManager := TDSessionManager new ]