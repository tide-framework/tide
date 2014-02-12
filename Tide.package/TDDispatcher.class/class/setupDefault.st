private
setupDefault
	default := self new.
	default 
		registerHandler: ((TDAmberFileHandler path: 'tide')
			directoryPath: '.';
			yourself);
		registerHandler: ((TDPresenterHandler path: 'counter')
			rootPresenterClass: TDCounter;
			yourself)