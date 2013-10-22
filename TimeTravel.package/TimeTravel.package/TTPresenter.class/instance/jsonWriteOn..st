json
jsonWriteOn: aStream
	^ Dictionary new
		at: 'actions' put: self actions ;
		at: 'state' put: self state;
		jsonWriteOn: aStream