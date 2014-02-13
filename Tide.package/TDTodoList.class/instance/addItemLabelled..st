actions
addItemLabelled: aString
	<action>
	self items add: (TDTodoItem new
		label: aString;
		yourself)