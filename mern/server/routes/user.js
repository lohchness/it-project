import express from "express";

import { decodeToken } from "./auth.js";
import User from "../models/User.js"

const router = express.Router();

// test token decoding
// using command line: curl localhost:5050/user/get-current-user -H "Authorization: Bearer token-value" - get token-value by going to inspect element in browser -> storage -> cookies
router.get("/get-current-user", decodeToken, async (req, res) => {
    res.status(200).send({
        decodeToken
    });
});

// Add a new endpoint to get a user by email
router.get("/get-user-by-email", async (req, res) => {
    try {
      const userEmail = req.query.email; // Get the email from the query parameters
  
      // Find the user in the database based on the provided email
      const user = await User.findOne({ email: userEmail });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json({ user });
    } catch (error) {
      console.error("Error fetching user by email:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.patch("/update", async (req, res) => {
    console.log(req.body);
  
    // Find user in the database and update with additional info
    const userEmail = req.body.email; // Assuming the email is in the request body
    const updateData = {
      phoneNumber: req.body.phoneNumber,
      about: req.body.about,
      address: req.body.address,
      mainApp: req.body.mainApp,
      position: req.body.position,
      emailChange: req.body.emailChange,
      picture: req.body.picture,
    };
  
    // Update the user document in the database based on the email
    await User.findOneAndUpdate({ email: userEmail }, updateData, { new: true })
      .then((user) => {
        if (user) {
          return res.status(200).json({ message: "User info updated", user });
        } else {
          return res.status(404).json({ message: "User not found" });
        }
      })
      .catch((error) => {
        console.error("Error updating user info:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  });

export default router;