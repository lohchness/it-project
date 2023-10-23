# COMP30022 IT Project - Group 101
## About
This is the repository for our [Personal CRM web app](https://group101-it-project-client.onrender.com) created as part of the subject COMP30022 IT Project. This application is intended to be a user-friendly service that allows users to effectively manage and keep in touch with their personal connections, keep track of upcoming events and tasks, and display their personal information & contact details on a profile page in order for others to contact them. 

To implement this app, we have decided to use the MERN (MongoDB, Express, React and Node.js) tech stack, due to its ease of use, speed of development, scalability and flexibility. We also utilise various tools in the development process including Figma for creating a UI prototype, Github for storing code, Slack and Discord for internal communication between team members, and Confluence & Jira for organization & task management. To deploy our application we used Render.

## How to use
Note: Due to the limitations of the free plan on the deployment service we are using, the application will spin down after 15 minutes of inactivity, thus requiring around 1-2 minutes to start up again before being able to process any requests from the user.   

__Test credentials__  
Username: testuser@test.com  
Password: testpassword

### Running the web app locally
__Server__   
Create the file `mern/server/config.env` to include the Atlas URI:
```
ATLAS_URI=mongodb+srv://zycheng:password_123@itproject.dvbimbn.mongodb.net/?retryWrites=true&w=majority
```

Start the server with the following command:
```
cd mern/server
npm install
node server.mjs
```

__Client__   
Start the client with the following command:
```
cd mern/client
npm install
npm start
```

Base project template adapted from [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial).
