accessing
sessionClass
	^ sessionClass ifNil: [ self defaultSessionClass ]