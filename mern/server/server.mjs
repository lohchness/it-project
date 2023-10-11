import express from "express";
import cors from "cors";

import "./loadEnvironment.mjs";
<<<<<<< HEAD
import records from "./routes/record.mjs";
import tasks from "./routes/task.mjs";
import notes from "./routes/note.mjs";
=======
import auth from "./routes/auth.js";
>>>>>>> main

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

<<<<<<< HEAD
app.use("/record", records);
app.use("/task", tasks);
app.use("/note", notes);
=======
app.use("/auth", auth);
>>>>>>> main

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
