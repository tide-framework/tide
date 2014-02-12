accessing preferences
sessionCookie
	^ self preferenceAt: #sessionCookie ifAbsentPut: [ '_tt_session_' ]