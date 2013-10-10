accessing
default
	default ifNil: [ self setupDefault ].
	^ default