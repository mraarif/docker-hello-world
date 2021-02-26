![](assets/docker.svg)

# docker-hello-world

<!-- <img src="assets/docker.jpg" width="256" height="256"  alt="docker-container"/> <h1>docker-samples</h1> -->

A collection of `hello-world` Dockerfile(s) for different frameworks to use as a starting point while building a new app or dockerizing an existing one.<br>
currently this collection has following sample docker files.

- [flask app using python base image](/flask/Dockerfile)
- [flask app using ubuntu base image](/flask/ubuntu.Dockerfile)
- [NodeJs app using nodejs base image](/nodejs/Dockerfile)

These Dockerfile(s) provide a very basic introduction on how to containerize an app, these are just `hello-world` apps.

### How to build and run

setps:

1. `docker build -t my-hello-world-app .`

2. `docker run -p 8080:80 -d my-hello-world-app`

3. visit http://localhost:8080 to see response from your app.
