testing
isExpired
	^ self modifiedOn + self expirySeconds  < TimeStamp now