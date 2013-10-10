sessions handling
startSessionExpirationProcess 
	self stopSessionExpirationProcess.
		
	sessionExpirationProcess := [ 
		[ (Delay forSeconds: 2 minutes asSeconds) wait.
			self removeExpiredSession ] repeat ]
		forkAt: Processor lowIOPriority
		named: 'TimeTravel session exiration handling process'