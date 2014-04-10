private
tideAmberLocation
	| cacheDirectory potentialLocations |
	cacheDirectory := MCGitHubRepository cacheDirectory.
	potentialLocations := cacheDirectory glob: [ :dir | self isTideAmberFrameworkDirectory: dir reference ].
	potentialLocations size ~= 1
		ifTrue: [ self inform: 'There are several candidates for the location of the tide framework' ].
	^ potentialLocations anyOne reference