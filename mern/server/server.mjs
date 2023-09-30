import express from "express";
import cors from "cors";

import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import auth from "./routes/auth.js";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", auth);
// app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
