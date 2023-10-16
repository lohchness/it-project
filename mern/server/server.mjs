import express from "express";
import cors from "cors";

import "./loadEnvironment.mjs";

import tasks from "./routes/task.js";
import notes from "./routes/note.js";
import auth from "./routes/auth.js";
import experience from "./routes/experience.js";
import profile from "./routes/profile.js";

const PORT = 5050;
const app = express();

app.use(cors());

// Prevent CORS errors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  
app.use(express.json());

app.use("/task", tasks);
app.use("/note", notes);
app.use("/auth", auth);
app.use("/experience", experience);
app.use("/profile", profile);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
