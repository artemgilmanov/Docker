# Docker

## Main Commands

- `docker version` - shows Docker version information.
- `docker logs someImageName` - shows container logs .
- `docker ps -a` - shows a list of all containers (running and stopped).
- `docker images` - shows a list of local images.
- `docker run someImageName` - creates and runs a new container from an image.
- `docker run -it someImageName` - runs a container with an interactive terminal.
- `docker run -d someImageName` - runs a container in detached (background) mode.
- `docker run -d --name someCustomName someImageName` - creates and runs a container with a custom name.
- `docker run -it --rm someImageName` - creates a temporary container that is automatically removed when it exits.
- `docker stop someContainerIdOrName` - stops a running container.
- `docker exec -it someContainerIdOrName someProcessName` - executes a command inside a running container (e.g., `/bin/bash`).
- `docker container inspect someContainerIdOrName` - shows low-level details and configuration of a container in JSON format.
- `docker container inspect someContainerId | Select-String "IPAddress"` - filters the inspect output to show only the IP address (PowerShell specific).
- `docker container prune` - removes all stopped containers.

## Port and Volume Mapping

- `docker run -p hostPort:containerPort someImageName` - maps a port on the host machine to a port inside the container.
- `docker run -v hostDirectory:containerDirectory someImageName` - mounts a host directory as a volume inside the container.
  - `-v ${PWD}:containerDirectory` - uses the `PWD` (Print Working Directory) shell variable to mount the current directory.

## Multi-Line Command Example

Complex `docker run` commands can be broken into multiple lines for readability using the backslash (`\`) line continuation character.

```bash
docker run \
--name my-nginx `# Assign a name to the container` \
-v ${PWD}:/usr/share/nginx/html `# Mount the current directory to the Nginx web root` \
-p 8080:80 `# Map host port 8080 to container port 80` \
-d `# Run in detached mode` \
--rm `# Remove the container when it exits` \
nginx `# The Docker image to use`
```

## Useful Commands Inside a Container

- `ls` - lists files and directories.
- `ls -la` - lists all files and directories, including hidden ones.
- `hostname` - shows the container's hostname (often the container ID).
- `hostname -i` - shows the container's IP address.
- `ping someIpAddress` - tests network connectivity to an IP address.
- `ping someDomainName` - tests network connectivity to a domain name.
- `exit` - exits the current shell session (may stop the container if it was started with `-it` and no main process is running).
- `cat someFileName.someExtension` - prints the contents of a file to the terminal.

## Dockerfile

```Dockerfile
FROM python:alpine (Base Image name: Tag (version) of base Image)
WORKDIR /app (Some documentation)
COPY . . (Some documentation)
CMD ["python", "main.py"] (Some documentation)
```

- `docker build .` - Builds an Image in Dockerfile.
- `docker build . -t someImageName:someTag` - Builds an Image in Dockerfile with name and tag for image.
- `docker build . -t someImageName` - Builds an Image in Dockerfile with name and tag will be added automatically by Docker.

## Docker-compose up

- `docker-compose up` - run docker compose file.
- `docker-compose up -d` - run docker compose file in detached/background mode.
- `docker-compose down` - stop and delete containers related to docker compose.

- `docker-compose up -d --build` - some documentation.

## Links

[Docker Hub](https://hub.docker.com/) - the default public registry for Docker images.
