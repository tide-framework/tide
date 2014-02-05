request handling
handleCallback: aCallback data: data
	| answer |

	answer := aCallback value: data.
	self 
		handleResponse: (answer == aCallback receiver
			ifTrue: [ ZnStatusLine ok ]
			ifFalse: [ ZnStatusLine created ])
		answer: answer