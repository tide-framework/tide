actions
removeItem: anItem
	<action>
	self items remove: anItem ifAbsent: [ nil ]