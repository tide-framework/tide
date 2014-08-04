accessing timestamps
createdOn
	^ createdOn ifNil: [ createdOn := DateAndTime now ]