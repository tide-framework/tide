I am the abstract presenter of Tide. I present JSON data received by the Amber client.

The data is split into two categories: 
- the state of the presenter (produced by methods containing a <state> pragme)
- the callback blocks of the presenter (produced by methods containing an <action> pragma).

Each presenter has an unique ID to get identified on the Amber side.

API:

Any object can be converted into a presenter with #asPresenter. It's methods containing <state> and <action> pragmas will be used to generate an appropriate presenter for it.

#actions and #state can be overridden in subclasses to produce custom JSON data.

