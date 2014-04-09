helpers
tideIndexPageUrl
	"Returns the full url of the index.html page where Tide can be used.
	
	self tideIndexPageUrl 
	returns e.g., http://localhost:7777/tide/github-cache/tide-framework/tide/master/tide-framework-tide-3a5a449/index.html
	"
	"This method is not needed by Tide  itself, it is only useful to helpers users find what to put in the web browser's address bar."
	| tideAmberLocation tideFileHandlerServingDirectory indexPagePath |
	tideAmberLocation := self tideAmberLocation.
	(tideAmberLocation childNames includes: 'bower_components')
		ifFalse: [ self error: 'You must execute "bower install" in ' , tideAmberLocation pathString ].
	tideFileHandlerServingDirectory := self fileHandler fileReference.
	indexPagePath := String streamContents: [ :stream | (tideAmberLocation resolve relativeTo: tideFileHandlerServingDirectory absolutePath) segments do: [:segment | stream nextPutAll: segment ] separatedBy: [stream nextPut: $/]].
	^ self servedUrl / indexPagePath / 'index.html'