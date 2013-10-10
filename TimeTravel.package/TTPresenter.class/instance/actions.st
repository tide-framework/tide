accessing
actions
	^(((Pragma allNamed: #action from: self class to: TTPresenter) 
		collect: [ :each | each method selector ])
			collect: [ :each | each -> (self callback: each) ])
				asDictionary