testing
isExpired
	^ (self modifiedOn + (Duration seconds: self expirySeconds)) asSeconds < DateAndTime now asSeconds 
