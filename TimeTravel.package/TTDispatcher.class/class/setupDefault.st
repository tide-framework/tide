private
setupDefault
	default := self new.
	default 
		registerHandler: ((TTAmberFileHandler path: 'timetravel')
			directoryPath: 'TimeTravel-Amber';
			yourself);
		registerHandler: ((TTPresenterHandler path: 'counter')
			rootPresenterClass: TTCounter;
			yourself)