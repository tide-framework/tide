accessing
state
	^((Pragma allNamed: #state from: self class to: TTPresenter)
		collect: [ :each | each method selector -> (self perform: each method selector) ])
			asDictionary