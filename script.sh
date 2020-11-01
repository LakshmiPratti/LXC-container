#!/bin/bash

echo "To install the snap package and interacts with the snap version of LXD"

sudo snap install lxd

echo "For configuration of lxd conatiners(eg CPU,Processes,Memory,Time limit for the session,Total number of concurrent sessions)"

sudo lxd init
#Would you like to use LXD clustering? (yes/no) [default=no]: 
#Do you want to configure a new storage pool? (yes/no) [default=yes]: 
#Name of the new storage pool [default=default]: SSDProject
#Name of the storage backend to use (btrfs, dir, lvm, zfs, ceph) [default=zfs]: 
#Create a new ZFS pool? (yes/no) [default=yes]: 
#Would you like to use an existing empty block device (e.g. a disk or partition)? (yes/no) [default=no]: 
#Size in GB of the new loop device (1GB minimum) [default=30GB]: 
#Would you like to connect to a MAAS server? (yes/no) [default=no]: 
#Would you like to create a new local network bridge? (yes/no) [default=yes]: 
#What should the new bridge be called? [default=lxdbr0]: 
#What IPv4 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: 
#What IPv6 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: 
#Would you like LXD to be available over the network? (yes/no) [default=no]: 


echo "For installing lxd-demo-server itself"

sudo snap install lxd-demo-server

sudo snap connect lxd-demo-server:lxd lxd:lxd

echo "http://IPaddress:8080"

echo "To change the configuration"

sudo lxd-demo-server.configure
