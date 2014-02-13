I implement the common behavior for all request handlers in Tide.

Subclasses should override #handleRequest:.

API:

Use #register and #unregister to manage handlers. Handlers will be registered with their #path into the default TDDispatcher instance.
See TDDispatcher  and TDDispatcher >> #default for more on handler registration.