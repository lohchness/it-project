## Description of branches
- ```main```: Currently contains working code from the merged ```login-signup-pages``` branch (visible when the client is run), as well as code from the ```profile-page``` branch.
- ```login-signup-pages```: Contains code for a working basic front-end implementation of the login, sign-up and reset password pages.  
- ```profile-page```: Contains code for a basic profile page, with the design implemented but only some working functionality.
- ```dashboard-calendar-pages```: Contains code for basic dashboard and calendar pages, as well as merged code from the ```login-signup-pages``` and ```profile-page``` branches in order to link those pages to the dashboard, with the design implemented but only some working functionality.
- ```test``` and ```figma-to-react```: Test branches that contain code that has been directly generated from the Figma design using the Locofy.ai plugin, to be tested out before being later modified for use in the project.

## How to run
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
