initialization
initialize
	super initialize.
	id := UUID new asString36.
	callbacks := TTCallbackRegistry new.	
	createdOn := TimeStamp now