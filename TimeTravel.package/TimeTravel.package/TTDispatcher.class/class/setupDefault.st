private
setupDefault
	default := self new.
	self halt.
	default 
		registerHandler: ((TTAmberFileHandler path: 'timetravel')
			directoryPath: 'TimeTravel-Amber';
			yourself);
		registerHandler: ((TTPresenterHandler path: 'counter')
			rootPresenterClass: TTCounter;
			yourself)