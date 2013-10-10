start/stop
stop
	server ifNotNil: [ server stop ].
	server := nil