accessing
rootPresenterFor: aHandler
	^ self rootPresenters 
		at: aHandler 
		ifAbsentPut: [ aHandler rootPresenterClass new ]