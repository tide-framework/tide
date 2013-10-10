accessing
dispatcher
	^ dispatcher ifNil: [ dispatcher := TTDispatcher default ]