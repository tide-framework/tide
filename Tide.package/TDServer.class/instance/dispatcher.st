accessing
dispatcher
	^ dispatcher ifNil: [ dispatcher := TDDispatcher default ]