import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

import connectToDB from "../db/conn.mjs";
import User from "../models/User.mjs"

const router = express.Router();

connectToDB();

// Registration endpoint
router.post("/register", async (req, res) => {
    console.log(req.body);

    bcrypt
        .genSalt(10, (err, salt) => {
            bcrypt
                .hash(req.body.password, salt, (err, hashedPassword) => {
                    console.log(hashedPassword);
                    // Create new user using request data
                    const user = new User({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hashedPassword,
                    });

                    user
                        .save()
                        .then((result) => {
                            console.log("user created");
                            res.status(201).send({
                                message: "User created",
                                result,
                            });
                        })
                        .catch((error) => {
                            console.log("error creating user");
                            res.status(500).send({
                                message: "Error creating user",
                                error,
                            });
                        });
                });
        });
});

// Extra endpoint for the optional 'about' and 'phone number' details in the registration process
router.post("/register-additional-info", async (req, res) => {
    console.log(req.body);

    await User.findOneAndUpdate(
        {email: req.body.email}, 
        {'phoneNumber': req.body.phoneNumber, 'about': req.body.about}
    ).then(
        res.status(200).send({
            message: "User info updated",
    }));

    

});

// Login endpoint
router.post("/login", async (req, res) => {
    // Check if email exists
    console.log(req.body.email);
    User.findOne({ email: req.body.email })
        .then((user) => {
            // Compare entered password with hashed password stored for the email
            bcrypt
                .compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        return res.status(400).send({
                            message: "Passwords do not match",
                            error,
                        });
                    }

                    // Create JWT token 
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    res.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })

                // Catch error if password do not match
                .catch((error) => {
                    res.status(400).send({
                        message: "Passwords do not match",
                        error,
                    });
                });
        })

        // Catch error if email does not exist
        .catch((e) => {
            res.status(500).send({
                message: "Email not found",
                e,
            });
        });
        
});

// // free endpoint
// router.get("/free-endpoint", async (req, res) => {
//     res.json({ message: "You are free to access me anytime" });
// });

//   // authentication endpoint
// router.get("/auth-endpoint", auth, (request, response) => {
//     response.send({ message: "You are authorized to access me" });
//   });

export default router;