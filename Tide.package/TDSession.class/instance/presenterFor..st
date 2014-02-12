accessing
presenterFor: anObject
	^ self presenters 
		at: anObject 
		ifAbsentPut: [ anObject asPresenter ]