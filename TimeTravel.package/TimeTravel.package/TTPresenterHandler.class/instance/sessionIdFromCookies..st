request handling
sessionIdFromCookies: aCollection
	aCollection 
		do: [ :each | each name = self dispatcher sessionCookie 
			ifTrue: [ ^ each value ifEmpty: [ nil ] ] ].
	
	^ nil