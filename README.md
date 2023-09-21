### 1. Server
Create the file `mern/server/config.env` to include the Atlas URI:
```
ATLAS_URI=mongodb+srv://zycheng:password_123@itproject.dvbimbn.mongodb.net/?retryWrites=true&w=majority
```

Start server:
```
cd mern/server
npm install
node server.mjs
```

### 2. Client
Start client:
```
cd mern/client
npm install
npm start
```

Base project template adapted from [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial).
