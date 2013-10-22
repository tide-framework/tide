callbacks
registerCallback: aSelector receiver: anObject
	^ (self callbacks registerCallback: (TTCallback receiver: anObject selector: aSelector)) url