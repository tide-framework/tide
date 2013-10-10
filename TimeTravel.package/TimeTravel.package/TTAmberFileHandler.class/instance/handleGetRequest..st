request handling
handleGetRequest: aRequest
	| file |
	file := self fileForRequest: aRequest.
	file exists 
		ifTrue: [
			file readStreamDo: [ :str |
				self respond: (ZnResponse ok: ((ZnStringEntity 
					type: (self mimeTypeForFile: file))
						string: str contents asString;
						yourself)) ] ]
		ifFalse: [
			self respond: (ZnResponse notFound: aRequest url) ]