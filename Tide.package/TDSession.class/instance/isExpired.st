testing
isExpired
	^ expired or: [
		(self modifiedOn + (Duration seconds: self expirySeconds)) asSeconds < DateAndTime now asSeconds ]