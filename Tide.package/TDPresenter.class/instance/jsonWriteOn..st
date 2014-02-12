json
jsonWriteOn: aStream
	^ Dictionary new
		at: '__id__' put: self id;
		at: 'actions' put: self actions;
		at: 'state' put: (self state collect: [ :each | each tidePresenter ]);
		jsonWriteOn: aStream