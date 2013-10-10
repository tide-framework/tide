accessing
current
	^ current ifNil: [ current := super new ]