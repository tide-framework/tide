accessing
activeItemsSize
	<state>
	^ (self list items reject: [ :each | each completed ]) size