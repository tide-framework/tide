callbacks
registerCallback: aSelector receiver: anObject
	^ (self callbacks registerCallback: (TDCallback receiver: anObject selector: aSelector)) url