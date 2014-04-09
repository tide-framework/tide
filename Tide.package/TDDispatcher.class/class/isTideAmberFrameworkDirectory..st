private
isTideAmberFrameworkDirectory: dir
	^ dir isDirectory
		and: [ #('index.html' 'bower.json' 'Tide-Amber') allSatisfy: [ :fileThatMustBePresent | dir childNames includes: fileThatMustBePresent ] ]