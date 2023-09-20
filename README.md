# IT Project - Personal CRM
A personal CRM app made for COMP30022 IT Project, for the purpose of allowing users to organize & keep in touch with their contacts.

## Built with
Tech stack:
- MongoDB - database
- Node.js - application server
- Express - web framework 
- React - front-end framework
  
Other tools used:
- [Locofy.ai](https://www.locofy.ai/) - tool for speeding up the conversion of Figma UI design to React front-end code

## How To Run
### Client
```
cd mern/client
npm install
npm start
```

### Server
Create the file `mern/server/config.env` with your Atlas URI and the server port:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/
```

Start server:
```
cd mern/server
npm install
npm start
```

Base project template adapted from [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial).
