actions
removeCompletedItems
	<action>
	self list items
		select: [ :each | each completed ] 
		thenDo: [ :each | self list removeItem: each ]