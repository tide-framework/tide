children
getItems
	<children>
	^ self list items collect: [ :each | TTTodoItemPresenter on: each ]