Tide
====

The missing web framework for Pharo & Amber.

Tide's mission is to make Pharo/Amber communication a breeze:

- Tide exposes JSON data to Amber through `presenter`s
- Each presenter contains "state" data as well as "action" callbacks
- Exposing JSON data is as simple as adding a pragma to a method
- On the Amber side, proxies are created with exact API defined on the Pharo side, and promises are used to transform the Async request/response communication into a sequential, simpler flow.

In addition, Tide is a small layer built on top of Zinc. It is quite fast and simple to understand.

Handcrafted with love by Nico & Esteban @RMoD.
