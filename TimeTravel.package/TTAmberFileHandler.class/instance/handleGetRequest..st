request handling
handleGetRequest: aRequest
	| file |
	file := self fileForRequest: aRequest.
	file exists 
		ifTrue: [
			file readStreamDo: [ :str | | type entity |
				type := self mimeTypeForFile: file.
				entity := (self isBinary: type)
					ifTrue: [ 
						str binary.
						ZnEntity bytes: str contents asByteArray ]
					ifFalse: [ ZnEntity text: (UTF8TextConverter new convertToSystemString: str contents asString) ].
				self respond: (ZnResponse ok: (entity 
					contentType: type;
					yourself)) ] ]
		ifFalse: [
			self respond: (ZnResponse notFound: aRequest url) ]