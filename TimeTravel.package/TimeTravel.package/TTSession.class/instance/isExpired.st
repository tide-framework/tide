testing
isExpired
	^ self modifiedOn + (Duration seconds: self expirySeconds) < TimeStamp now