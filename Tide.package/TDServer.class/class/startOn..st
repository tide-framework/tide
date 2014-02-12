start/stop
startOn: aNumber
	self server
		stop;
		port: aNumber;
		start