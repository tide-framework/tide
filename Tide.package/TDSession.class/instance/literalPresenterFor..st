accessing
literalPresenterFor: anObject
	^ self literalPresenters 
		at: anObject 
		ifAbsentPut: [ anObject asLiteralPresenter ]