# Project 2

For this project I am working with Elgin, Steven, and Richard.  We are designing a DOD specific Craigslist style application.

## Notes

### Docker Commands

These are important docker commands that pertain to this specific project.  Elgin and I are responsible for the back-end Express and postGresSQL points.

```
// Start the postGres container, the command works like this:
$ docker run --rm --name pg-docker -e POSTGRES_PASSWORD={dbPassword} -d -p {port:port} -v ~/{path to volume}:/var/lib/postgresql/data postgres

//command for this project
$ docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v ~/docker/volumes/postgres:/var/lib/postgresql/data postgres

//list the docker containers 
$ docker container ls

//Get into the docker container
$ docker exec -it {container ID} bash

//create a new database

docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432  -v ~/docker/volumes/postgres:/var/lib/postgresql/data postgres