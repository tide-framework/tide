accessing
presenterFor: anObject ifAbsent: aBlock
	^ self presenters 
		at: anObject 
		ifAbsent: aBlock