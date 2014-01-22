accessing
at: aKey
	<action>
	^ self self model at: aKey ifAbsent: [ nil ]