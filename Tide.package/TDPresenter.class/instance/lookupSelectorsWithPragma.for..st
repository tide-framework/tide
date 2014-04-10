private
lookupSelectorsWithPragma: aSymbol for: anObject
	^ ((Pragma allNamed: aSymbol from: anObject class to: Object) collect: [ :each |	
			each method selector ]) asSet