*TimeTravel-Seaside
ttDirtyComponents
	^ self properties at: #ttDirtyComponents ifAbsentPut: [ Set new ]