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

    export PATH=/c/MinGW/bin:/c/nodejs:$PATH

so that node and npm can be found.

For using the tools from a Windows command prompt, your are on your own.

###Check that it works

    node

should lead you to the node REPL.

Hit Ctrl-C twice to exit.


    npm help

should show you the help of npm.

##Install Bower package manager

You need to have Bower available for installation.

You can either install it as a local component or a global one.

To install as a global component (recommended option):

    npm -g install bower@1.2.6

The @1.2.6 suffix means that you want that very version.
The newest version has a bug when it installs Amber.

If you have a newer version, remove it with

    npm -g remove bower

or 

    npm -g uninstall bower

Omit the -g if you want to install in the current folder. (you are on your own then).

##Installing

Tide is pretty young and probably not ready for prime-time yet. Here's how to install it:

### Create the project structure
    mkdir myproject
    cd myproject

### Get a Pharo image
    curl get.pharo.org/30+vm | bash

### Clone the tide repository
    mkdir repository
    cd repository

If you are a commiter do:

    git clone git@github.com:tide-framework/tide.git

If not, do:

    git clone https://github.com:tide-framework/tide.git


### Install all dependencies using Bower

    cd tide
    bower install

Bower installs the dependencies in a subfolder named 

    ./bower_components

Don't mess with that folder.

The frontend installation bit should be over.

All of the definitions of the sample project are in

Open the Pharo image (which lives in myproject/):

    ./pharo-ui Pharo.image

(If there is only one .image file in the folder, ./pharo-ui will work, but not if there are more than one).

Once you get the Pharo window open, you have to install the Tide backend part. This means bringing the Pharo code you cloned from GitHub into the Pharo image.

You'll do that by using Monticello, the Pharo package and version control manager).

Open Monticello:

    * Click on the background of the Pharo window
    * In the World menu that appears, click on Monticello Browser)
    * Click on +Repository
    * Select "filetree://"
    * In the file/folder selection window that appears, select myproject/repository/tide
    * Click ok
    * A window opens with BaselineOfTide and Tide in the left column.  (if you do it wrong, these will be empty)
    * Click on "BaselineOfTide.package" in the right column
    * Click the "Load" button in the top bar (a little briefly shows up while BaselineOfTide loads inside the image)

You are done with Monticello.

Now, let's install the code from the Baseline and repository you just configured.

Open a workspace:

    * Click on the background of the Pharo window
    * In the World menu that appears, click on Workspace
    * In that window, evaluate: (you type the thing, select the text and then right click and select "Do It" from the menu.

    BaselineOfTide load.

    * The code of Tide loads as the progress bar does show.

Start the Tide server:

    * In the workspace, proceed as for the previous workspace action but with:
    TDServer startOn: 7777.

    * The Tide server is now running on port 7777.

Save your Pharo image (otherwise, if you close it, you'll have to redo all of the install of code in the image:

    * Click on the background
    * In the World menu, choose Save
    * Your image is written to disk with the proper setup inside it

Open your web browser and go to: 

    http://localhost:7777/myproject/repository/tide/index.html

The Helios IDE will open. To try the counter example, evaluate in Helios (Type it in a Workspace and choose to Do It.)

    TDCounterWidget new render

You now have a working install with Amber and Pharo talking together.


