actions
at: anIndex
	<action>
	^ self model at: anIndex ifAbsent: [ self error: 'Not found' ]