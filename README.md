# SSD27_Project

To create a LXC container with limitations on RAM, CPU and storage.The instances in a given VM are deployed with virtualization in place.Containers are independent of each other,image is deployed and mailed the history of the commands. 

## LXD demo server

This repository contains the backend code of the LXD online demo service.

[https://linuxcontainers.org/lxd/try-it](https://linuxcontainers.org/lxd/try-it)

## What is it

Simply put, it's a small Go daemon exposing a REST API that users
(mostly our javascript client) can interact with to create temporary
test containers and attach to that container's console.

Those containers come with a bunch of resource limitations and an
expiry, when the container expires, it's automatically deleted.

The main client can be found at the URL above, with its source available here:  
[https://github.com/lxc/linuxcontainers.org](https://github.com/lxc/linuxcontainers.org)

## Installing on Ubuntu

The easiest way to get the demo server running on Ubuntu is by using the snap package.

First install and configure LXD itself:

```
sudo snap install lxd
sudo lxd init
```

Then install and configure the LXD demo server:

```
sudo snap install lxd-demo-server
sudo snap connect lxd-demo-server:lxd lxd:lxd
sudo lxd-demo-server.configure
```

You can then access the server at: http://IP-ADDRESS:8081/

## Dependencies

The server needs to be able to talk to a LXD daemon over the local unix
socket, so you need to have a LXD daemon installed and functional before
using this server.

Other than that, you can pull all the other necessary dependencies with:

    go get github.com/lxc/lxd-demo-server

## Building it

A very simple:

    go build

Should do the trick.

## Running it

You can change the configuration by updating the content of lxd-demo.yaml file according to your environment.

You will either need a container to copy for every request or a
container image to use, set that up and set the appropriate
configuration key.

Once done, simply run the daemon with:

    ./lxd-demo-server

The daemon isn't verbose at all, in fact it will only log critical LXD errors.

You can test things with:

    curl http://localhost:8081/1.0
    curl http://localhost:8081/1.0/terms

The server monitors the current directory for changes to its configuration file.
It will automatically reload the configuration after it's changed.

## History of the Commands

Reading and storing the command entered by the user. Taking email as an input. Sending a mail using SMTP API for delivering email, for security encrypted the SMTP credentials, locked it to a single domain, and passed a secure token instead of the credentials.



