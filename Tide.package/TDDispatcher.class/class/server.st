private
server
	| server |
	server := TDServer server.
	server isRunning ifFalse: [ server start ].
	server isListening
		ifFalse: [ self error: 'The TDServer must be started' ].
	^ server