private
setupDefault
	default := self new.
	default 
		registerHandler: ((TDFileHandler path: 'tide')
			directoryPath: '.';
			yourself);
		registerHandler: ((TDPresenterHandler path: 'counter')
			rootPresenterClass: TDCounter;
			yourself)