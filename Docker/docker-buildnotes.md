# Docker images and files

Docker images are the image files we either pull from docker hub or create from a Dockerfile.  When we use $ docker run  [OPTIONS] "image name" 
  we are calling the image and creating a container from it (this can probably be worded better)



# Dockerfiles

  Dockerfile are used to fefine how your application should run.  Everyone on your team will use this to run and/or deploy this app as a service.
  
## building our dockerfile
```
# specify the node base image with your desired version
FROM: node:14

# set and create the working directory for this app
WORKDIR /app

# Copy this application's file from the current directory to the filesystem of the container at /app
COPY . /app

# Make the container acept traffic on port 3000 at the runtime from other containers or the hose if also published
EXPOSE 3000

# run this shell command at build time
RUN npm install

# start the application
CMD npm start


```


## Running our file
To build and run the file do this shit below:

```
# Step 1
# Build the imagee from Dockerfile at the specified path.  
# The -t flag tells docker to name and optionall tag a version to the image
# If no -t flag is given, it will default to 'latest'  

$ docker build -t apidemo .

# Step 2: Run the image called apidemo and publish (map) port 8080 from the docker container to port 4000 of the host  
$ docker run -p 4000:8080 apidemo

# Step: 2 OR run the container in the background as a  'detached container' instead  
$ docker run -d -p 4000:8080 apidemo

#Step 3: provided your app respond to a GET request on the / route, use curl to send a request to localhost: 4000 to see the app running  
$ curl localhost:4000

#step 4 list containers to get apidemo's unique id  
$ docker container ls 

# stop the apidemo container with it's id
$ docker container stop "container id here"

```

# .dockerignore
Just like .gitignore, you should add large and sensitive files  like project dependencies, build file, api tokens or passwords. 

By creating a .dockerIgnore file and adding some of these things to it, you'll reduce the size of the image, speed up the build porcess, and have your cake while eating it.

To create a .dockerignore file:

```
#step 1: create the .dockerignore file in your docker build context directory  
$ touch .dockerignore

# step 2: Add the files you want docker to ignore to the .dockerignore, for instance:
node_modules
mySecretAPIToken.token


