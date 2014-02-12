accessing preferences
preferenceAt: aSymbol ifAbsentPut: aBlock
	^ self preferences at: aSymbol ifAbsentPut: aBlock