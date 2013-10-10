accessing
completedItemsSize
	<state>
	^ (self list items select: [ :each | each completed ]) size