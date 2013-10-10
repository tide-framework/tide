evaluating
value: aCollection
	  ^ messageSend valueWithPossibleArguments: (aCollection ifNil: [ #() ])