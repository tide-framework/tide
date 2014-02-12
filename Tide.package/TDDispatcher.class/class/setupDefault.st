private
setupDefault
	default := self new.
	default 
		registerHandler: ((TDAmberFileHandler path: 'timetravel')
			directoryPath: 'TimeTravel-Amber';
			yourself);
		registerHandler: ((TDPresenterHandler path: 'counter')
			rootPresenterClass: TDCounter;
			yourself)