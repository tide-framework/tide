sessions handling
stopSessionExpirationProcess 
	sessionExpirationProcess 
		ifNotNil: [ :process |
			process terminate ]