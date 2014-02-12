accessing preferences
useCookies
	^ self preferenceAt: #useCookies ifAbsentPut: [ true ]