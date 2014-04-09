private
actionsFor: anObject
	^ ((self lookupSelectorsWithPragma: #action for: anObject)
			collect: [ :each | 
				each -> (self session registerCallback: each receiver: anObject) ])
					asDictionary 