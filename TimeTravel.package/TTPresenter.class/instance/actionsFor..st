private
actionsFor: anObject
	^(((Pragma allNamed: #action from: anObject class to: Object) 
		collect: [ :each | each method selector ])
			collect: [ :each | each -> (self session registerCallback: each receiver: anObject) ])
				asDictionary