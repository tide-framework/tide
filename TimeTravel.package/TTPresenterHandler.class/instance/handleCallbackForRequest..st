request handling
handleCallbackForRequest: aRequest
	"One callback only per request. 
	Oh, and no parameter yet."

	| key |
	
	key := aRequest uri 
		queryAt: TTDispatcher callbackField 
		ifAbsent: [ ^ self ].
	self 
		handleCallback: (self session callbacks 
			callbackAt: key 
			ifAbsent: [  ^ self ])
		data: (aRequest entity ifNotNil: [ :entity | 
			Json readFrom: (entity fields at: 'arguments') readStream ])