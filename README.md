# Docker

## Main Commands

- `docker version` - shows Docker version information
- `docker ps -a` - shows a list of running and stopped containers
- `docker images` - shows list of local images
- `docker run someImageName` - creates and runs a container
- `docker run -it someImageName` - runs container with interactive terminal
- `docker run -d someImageName` - creates and runs a container in background mode
- `docker run -d --name someCustomName someImageName` - creates and runs a container with custom name
- `docker stop someContainerIdOrName` - stops the container
- `docker exec -it someContainerIdOrName someProcessName` - runs a command inside a running container
- `docker container inspect someContainerId` - shows container details
- `docker container inspect someContainerId | Select-String "IPAddress"` - shows only specified details (PowerShell specific)
- `docker container prune` - removes all stopped containers

## Main Commands inside Container

- `ls` - shows files and folders inside container
- `ls -la` - shows files and folders including hidden ones
- `hostname` - shows hostname/ID of the container
- `hostname -i` - shows IP address
- `ping someIpAddress` - check network connectivity to an IP address
- `ping someDomainName` - check network connectivity to a domain
- `exit` - exit the container shell
- `cat someFileName.html` - display contents of an HTML file

[Docker Hub](https://hub.docker.com/) - registry with collection of container images
