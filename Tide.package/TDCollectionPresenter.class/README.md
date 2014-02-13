I am the default presenter for collections.

While I expose a very limited API, it is generally enough as the Amber client will be get a collection back with the #copyFrom:to: callback.
Using the #contents callback might be very slow with large collections as it will transfer to the client the entire contents of the collection.