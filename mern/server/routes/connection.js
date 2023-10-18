import express from "express";
import { db } from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("connections");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("connections");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
    let newDocument = {
        registered_user: req.body.registered_user,
        made_up_name: req.body.made_up_name,
        current_user_id: req.body.current_user_id,
        friend_user_id: req.body.friend_user_id,
        last_contact: req.body.last_contact,
        tags: req.body.tags,
    };
    let collection = await db.collection("connections");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates =  {
      $set: {
  
        description: req.body.description,
        duedate: req.body.duedate
      }
    };
  
    let collection = await db.collection("connections");
    let result = await collection.updateOne(query, updates);
  
    res.send(result).status(200);
  });

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
  
    const collection = db.collection("connections");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);
  });
  
  export default router;