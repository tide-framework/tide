private
stateFor: anObject
	^((Pragma allNamed: #state from: anObject class to: Object)
		collect: [ :each | each method selector -> (anObject perform: each method selector) ])
			asDictionary