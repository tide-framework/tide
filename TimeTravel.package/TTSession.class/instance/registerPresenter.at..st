accessing
registerPresenter: aPresenter at: aString
	self rootPresenters at: aString put: aPresenter.
	self presenters at: aPresenter id put: aPresenter