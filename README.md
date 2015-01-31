# darrenonthe.net v1

Source code used for the current 

## Tech used:

* Express (node.js)
* Jade
* Grunt
* LESS

## Development

Ships with a Vagrantfile and some cookbooks for preparing a simple server with Node, Mongo and build essentials.

### Setting up

Clone this repository, navigate to the root of this project and boot up the Vagrant box by running the following command:

```
vagrant up
```

Once it's finished booting up, SSH into the vagrant box and navigate to the synced folder: 

```
vagrant ssh
cd /vagrant/app
```

Install the projects dependencies as defined in package.json by running:

```
sudo npm install
```

Next, install grunt-cli globally:

```
sudo npm install -g grunt-cli
```

Next, build the CSS, Javascript and copy all other required assets via Grunt:

```
grunt build
```

Last but not least, start up the Node.js server:

```
node server.js
```

Now, navigate to http://localhost:3000 and you should see the website.
