evaluating
value: aCollection
	  ^ messageSend valueWithEnoughArguments: (aCollection ifNil: [ #() ])