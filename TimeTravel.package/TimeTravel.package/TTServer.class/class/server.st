accessing
server
	^ server ifNil: [ server := ZnServer defaultServerClass new
		dispatcher: self current;
		yourself ]