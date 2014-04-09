accessing
baseline: spec
	<baseline>
	spec
		for: #pharo
		do: [ 
			spec repository: 'github://tide-framework/tide:master'.
			spec
				project: 'JSON'
				with: [ 
					spec
						className: 'ConfigurationOfJSON';
						versionString: '1.0';
						repository: 'http://smalltalkhub.com/mc/PharoExtras/JSON/main' ].
			spec package: 'Tide' with: [ spec requires: #('JSON') ] ]