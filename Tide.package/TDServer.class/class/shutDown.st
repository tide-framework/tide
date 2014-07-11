system startup
shutDown
	serverStarted := self server isRunning.
	serverStarted ifTrue: [ self server stop ]