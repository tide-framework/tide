accessing preferences
preferences
	^ preferences ifNil: [ preferences := Dictionary new ]