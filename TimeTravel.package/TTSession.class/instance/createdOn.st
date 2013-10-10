accessing timestamps
createdOn
	^ createdOn ifNil: [ createdOn := TimeStamp now ]