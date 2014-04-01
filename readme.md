Tide
====

The missing web framework for Pharo & Amber.

Tide's mission is to make Pharo/Amber communication a breeze:

- Tide exposes JSON data to Amber through `presenter`s
- Each presenter contains "state" data as well as "action" callbacks
- Exposing JSON data is as simple as adding a pragma to a method
- On the Amber side, proxies are created with exact API defined on the Pharo side, and promises are used to transform the Async request/response communication into a sequential, simpler flow.

In addition, Tide is a small layer built on top of Zinc and Amber. It is quite fast and simple to understand.

Handcrafted with love by Nico & Esteban @RMoD.

##Installing

Tide is pretty young and probably not ready for prime-time yet. Here's how to install it:

    # Creates the project structure
    mkdir myproject
    cd myproject

    # Get a Pharo image
    curl get.pharo.org/30+vm | bash

    # Clone the tide repository
    mkdir repository
    cd repository
    git clone git@github.com:tide-framework/tide.git

    # Install all dependencies using Bower
    cd tide
    bower install


Open the Pharo image, then evaluate:

    BaselineOfTide load.
    TDServer startOn: 7777.


Open your web browser on http://localhost:7777/tide/repository/tide/index.html

The Helios IDE will open. To try the counter example, evaluate in Helios:

    TDCounterWidget new render



