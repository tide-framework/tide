accessing timestamps
modifiedOn
	^ modifiedOn ifNil: [ modifiedOn := self createdOn ]