accessing
children
	^(((Pragma allNamed: #child from: self class to: TTPresenter) 
		collect: [ :each | each method selector ])
			collect: [ :each | each -> (self callbackAnswer: each) ])
				asDictionary