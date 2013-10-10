request handling
sessionIfFromCookies: aCollection
	aCollection 
		do: [ :each | each name = self dispatcher sessionCookie 
			ifTrue: [ ^ each value ifEmpty: [ nil ] ] ].
	
	^ nil