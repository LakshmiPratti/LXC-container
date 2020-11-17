# SSD_Project_27

## To create a LXC container with limitations on RAM, CPU and Storage. The instances in a given VM are deployed with virtualization in place. No option for LXC - LXC communication, image is deployed. 
Installation of lxc and lxd
Initialize the LXC environment
Creating container as unprivileged user/root using template
Limiting the RAM/CPU/Storage of our container
Get the history of commands
## LXD demo server

## Introduction

Simply put, it's a small Go daemon exposing a REST API that users
(mostly our javascript client) can interact with to create temporary
test containers and attach to that container's console.

Those containers come with a bunch of resource limitations and an
expiry, when the container expires, it's automatically deleted.

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

You can then access the server at: http://IP-ADDRESS:8080/

## Dependencies
the demo.yaml files contains the configuration of LXD, using that the 
limitations for RAM, CPU and Storage disk were set.

The server needs to be able to talk to a LXD daemon over the local unix
socket, so you need to have a LXD daemon installed and functional before
using this server.

Other than that, you can pull all the other necessary dependencies with:

    go get github.com/LakshmiPratti/SSD27_Project/

## Building it

A very simple:

    go build

Should do the trick.

## Running it

You will either need a container to copy for every request or a
container image to use, set that up and set the appropriate
configuration key.

Once done, simply run the daemon with:

    ./lxd-demo-server

The daemon isn't verbose at all, in fact it will only log critical LXD errors.

You can test things with:

    curl http://localhost:8080/1.0
    curl http://localhost:8080/1.0/terms


