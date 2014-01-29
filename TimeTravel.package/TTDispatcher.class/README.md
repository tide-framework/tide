I am the main entry point for requests.

I hold request handlers, to which I dispatch requests after finding of creating a session for the incoming request.

API:

Add a request handler using #registerHandler: