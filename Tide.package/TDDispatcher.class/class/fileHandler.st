private
fileHandler
	^ self server delegate dispatcher handlers
		detect: [ :handler | handler isKindOf: TDFileHandler ]
		ifNone: [ self error: 'The TDServer was not started properly' ]