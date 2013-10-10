request handling
fileForRequest: aRequest
	"Hack hack hack.
	Skip the first segment of the request URI."
	
	 ^ aRequest uri segments allButFirst 
		inject: self fileReference 
		into: [ :acc :each | acc / each ]