adding/removing
removeItem: anItem
	self items 
		remove: anItem
		ifAbsent: [ ]