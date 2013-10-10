testing
canHandleRequest: aRequest
	^ aRequest uri firstPathSegment = self path