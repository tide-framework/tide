accessing
presenterWithId: aString
	^ self presenters 
		detect: [ :each | each id = aString ]
		ifNone: [ nil ]