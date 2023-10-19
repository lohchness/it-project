import express from "express";
import {db} from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    const userEmail = req.query.email; // Get the userEmail from the query parameter
  
    if (!userEmail) {
      res.status(400).send("Missing email query parameter");
      return;
    }
  
    let collection = await db.collection("histories");
    let results = await collection.find({ email: userEmail }).toArray();
  
    res.send(results).status(200);
  });

// This section will help you create a new record.
router.post("/", async (req, res) => {
    let newDocument = {
      email: req.body.email,
      description: req.body.description,
      date: req.body.date,
      type: req.body.type,
    };
    let collection = await db.collection("histories");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

  // This section will help you delete a record
router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
  
    const collection = db.collection("histories");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);
  });

  export default router;