start/stop
startOn: aNumber
	self stop.
	server := (ZnServer on: aNumber)
		delegate: self current;
		start;
		yourself