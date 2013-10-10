accessing
items
	items ifNil: [ items := self defaultItems ].
	^ items