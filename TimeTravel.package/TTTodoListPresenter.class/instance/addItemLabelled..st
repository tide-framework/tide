actions
addItemLabelled: aString
	<action>
	self list addItem: (TTTodoItem labelled: aString list: self list)