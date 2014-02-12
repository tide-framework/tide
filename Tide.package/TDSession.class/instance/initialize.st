initialization
initialize
	super initialize.
	id := UUID new asString36.
	callbacks := TDCallbackRegistry new.	
	createdOn := TimeStamp now