accessing
handlerFor: aRequest
	^ self handlers 
		detect: [ :each | each canHandleRequest: aRequest ]
		ifNone: [ nil ]