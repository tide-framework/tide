private
stateFor: anObject
	^(((Pragma allNamed: #state from: anObject class to: Object)
		collect: [ :each | each method selector ]) asSet collect: [ :each | 
			each -> (anObject perform: each) ])
				asDictionary