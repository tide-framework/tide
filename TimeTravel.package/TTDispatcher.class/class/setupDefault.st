private
setupDefault
	default := self new.
	default 
		registerHandler: ((TTFileHandler path: 'timetravel')
			directoryPath: 'TimeTravel-Amber';
			yourself);
		registerHandler: ((TTPresenterHandler path: 'counter')
			rootPresenterClass: TTCounter;
			yourself)