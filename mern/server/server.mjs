import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import tasks from "./routes/task.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);
app.use("/task", tasks);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
