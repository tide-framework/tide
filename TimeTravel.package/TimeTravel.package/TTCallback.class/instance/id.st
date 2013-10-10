accessing
id
	^ id ifNil: [ id := messageSend hash asString ]