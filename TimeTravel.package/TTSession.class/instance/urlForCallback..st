accessing
urlForCallback: aCallback
	| url |
	url := self context request url copy
		query: Dictionary new;
		yourself.
	self dispatcher useCookies ifFalse: [
		url queryAt: self dispatcher sessionField put: self id ].
	url 
		queryAt: self dispatcher callbackField put: aCallback id;
		yourself.
	^ url