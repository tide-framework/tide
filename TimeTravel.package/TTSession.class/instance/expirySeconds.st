accessing
expirySeconds
	^ expirySeconds ifNil: [ self defaultExpirySeconds ]