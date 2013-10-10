accessing preferences
preferenceAt: aSymbol
	^ self preferences at: aSymbol ifAbsent: []