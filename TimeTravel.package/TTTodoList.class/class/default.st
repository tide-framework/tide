accessing
default
	| default |
	^ default ifNil: [ default := self new ]