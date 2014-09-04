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

##Prerequisites

You need to have nodejs installed on your system.

Got to (http://nodejs.org) and install the nodejs installer for your operating system.
###Windows

On Windows, download the msi and execute it. Install in an easy location(e.g. c:\nodejs) instead of in "Program Files", which has an annoying embedded space.

####MinGW/MSYS specifics

Edit your ~/.profile file to add the nodejs path:

    $ export PATH=/c/MinGW/bin:/c/nodejs:$PATH

so that node and npm can be found.

For using the tools from a Windows command prompt, your are on your own.

###Check that it works

    $ node

should lead you to the node REPL.

Hit Ctrl-C twice to exit.


    $ npm help

should show you the help of npm.

##Install Bower package manager

You need to have Bower available for installation.

You can either install it as a local component or a global one.

To install as a global component (recommended option):

    $ npm -g install bower

Omit the -g if you want to install in the current folder. (you are on your own then).

##Installing

Tide is pretty young and probably not ready for prime-time yet. Here's how to install it:

### Create the project structure
    $ mkdir myproject
    $ cd myproject

### Get a Pharo image
    $ curl get.pharo.org/30+vm | bash

### Open the Pharo image

Open the Pharo image (which lives in `myproject/`):

    $ ./pharo-ui Pharo.image

(If there is only one .image file in the folder, `./pharo-ui` will work, but not if there are more than one).

### Preparing the Pharo image

Once you get the Pharo window open, you have to install the Tide backend part. This means bringing the Pharo code you cloned from GitHub into the Pharo image.

* Click on the background of the Pharo window
* In the World menu that appears, click on `Workspace`
* In that window, evaluate: (you type the thing, select the text and then right click and select "Do It" from the menu).

```
Metacello new
  configuration: 'Tide';
  version: #development;
  repository: 'http://www.smalltalkhub.com/mc/Pharo/MetaRepoForPharo30/main';
  load.
```

When this is finished, evaluate:

    TDDispatcher tideIndexPageUrl inspect

When first executed, you will get an error saying you must execute `bower install` in a particular directory. Open a terminal, change to the right directory, and execute:

    $ bower install

Back in the Pharo window, close the error message and evaluate the same instruction again:

    TDDispatcher tideIndexPageUrl inspect

This should give you the URL at which your web browser should be pointed to. Now copy this URL, open your web browser and paste it in the browser's address bar.

The Helios IDE will open (if your web browser allows pop-ups). To try the counter example, evaluate in Helios (Type it in a Workspace and choose to `Do It`.)

    TDCounterWidget new render

When you press the `Do It` button, the browser window at which you pasted the URL will now contain a counter. You now have a working install with Amber and Pharo talking together.

Save your Pharo image:

* Switch back to the Pharo window
* Click on the background
* In the World menu, choose Save
* Your image is written to disk with the proper setup inside it

### Changing the default port

If you don't like the default port, you can change it (to e.g., 7777) by evaluating:

    TDServer startOn: 7777. "optional step"
