accessing
baseline: spec 
	<baseline>
	
	spec for: #pharo do: [
		spec repository: 'filetree://repository/tide'.
		
		spec package: 'JSON' with: [ 
			spec repository: 'http://smalltalkhub.com/mc/NicolasPetton/JSON/main' ].
		spec package: 'Tide' with: [
			spec requires: #( 'JSON' ) ] ].