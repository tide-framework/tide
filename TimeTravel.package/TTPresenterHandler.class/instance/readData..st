request handling
readData: anArray
	^ anArray collect: [ :each |
		each isJsonObject ifTrue: [ 
			(each at: '__id__')
				ifNotNil: [ :id | 
					(self session presenterWithId: id)
						ifNotNil: [ :presenter | presenter asObject ] ] ] ]