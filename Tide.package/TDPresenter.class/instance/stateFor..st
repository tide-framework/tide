private
stateFor: anObject
	^ ((self lookupSelectorsWithPragma: #state for:  anObject) collect: [ :each |
			each -> (anObject perform: each) ]) asDictionary