request handling
handleCallbackForRequest: aRequest
	"One callback only per request."

	| key |
	
	key := aRequest uri 
		queryAt: TDDispatcher callbackField 
		ifAbsent: [ ^ self ].
	self 
		handleCallback: (self session callbacks 
			callbackAt: key 
			ifAbsent: [  ^ self callbackNotFound ])
		data: (aRequest entity ifNotNil: [ :entity | 
			self readData: (Json readFrom: (entity fields at: 'arguments') readStream) ])