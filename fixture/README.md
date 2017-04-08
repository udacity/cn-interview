# Fixture misc

Here are some fixture resources you may need for your codinge tests.

## Simple API server

### Requirements

Please make sure you already have [Node.js](https://nodejs.org) and [NPM](https://www.npmjs.com/) installed.

### How to run it?

* Run `npm i` under this folder.
* Run `npm start`, you will see message like 
```
app start at http://localhost:55938
```
* Run `curl http://localhost:55938/api/ping` you will simplily get a `pong` response.

### API

- **Ping**

 API: `GET /api/ping`  
 Res: `pong`  

- **Course**

 API: `GET /api/courses?level=中级&track=iOS`  
 Res: A list of courses like `[course]`  

### Develope

Free to modify any of these files under the repo.



