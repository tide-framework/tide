testing
isBinary: aMimeType
	^ aMimeType isBinary and: [ 
		(aMimeType sub subStrings: '+')  noneSatisfy: [ :each | 
			#('javascript') includes: each ] ]