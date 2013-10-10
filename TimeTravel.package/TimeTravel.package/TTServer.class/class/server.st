accessing
server
	^ server ifNil: [ server := ZnServer defaultServerClass new
		delegate: self current;
		yourself ]