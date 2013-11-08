accessing
data 
	^ self model collect: [ :each | each asPresenter ]