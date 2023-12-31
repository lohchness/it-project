import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

import { connectToDB } from "../db/conn.mjs";
import User from "../models/User.js"
import sendVerificationCodeEmail from "../email.js";

const router = express.Router();
connectToDB();

export const decodeToken = async (request, response, next) => {
    try {
        //   get the token from the authorization header
        const token = await request.headers.authorization.split(" ")[1];

        //check if the token matches the supposed origin
        const decodedToken = await jwt.verify(token, "token");

        // retrieve the user details of the logged in user
        const user = await decodedToken;

        // pass the user down to the endpoints here
        request.user = user;

        response.status(200).json({
            user
        });

    } catch (error) {
        response.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
};

// Registration endpoint
router.post("/register", async (req, res) => {
    console.log(req.body);

    // Hash password
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

                    // Save new user to database
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
                            console.log(error);
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

    // Find user in database and update with additional info
    await User.findOneAndUpdate(
        { email: req.body.email },
        { phoneNumber: req.body.phoneNumber, about: req.body.about, address: req.body.address,
          mainApp: req.body.mainApp, position: req.body.position, emailChange: req.body.emailChange,
          picture: req.body.picture}
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
                        "token",
                        { expiresIn: "7 days" },
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

function generateCode(){
    return Math.floor(10000 + Math.random() * 90000);
}

let code = generateCode();

// Password reset request endpoint
router.post("/request-password-reset", async (req, res) => {
    console.log(req.body.email);
    console.log(code);

    // Check if email exists in the database
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                res.status(500).send({
                    message: "Email not found",
                });
            } else {
                sendVerificationCodeEmail(req.body.email, code);
                res.status(200).send({
                    message: "Password reset email sent",
                });
            }
        })
});

// verify confirmation code
router.post("/verify-confirmation-code", async (req, res) => {
    console.log(req.body.confirmationCode);

    // TODO: Confirm verification code is valid. For now, let 12345 be default code
    if (req.body.confirmationCode==code){
        res.status(200).send({
            message: "Confirmation code is valid",
        });
    } else {
        res.status(500).send({
            message: "Incorrect verification code",
        });
    }
    
});

// Password reset endpoint
router.post("/reset-password", async (req, res) => {
    console.log(req.body);

    // Hash new password
    bcrypt
        .genSalt(10, (err, salt) => {
            bcrypt
                .hash(req.body.password, salt, (err, hashedPassword) => {

                    // Find user in database and update their stored password hash
                    User.findOneAndUpdate(
                        { email: req.body.email },
                        { password: hashedPassword }
                    ).then(
                        res.status(200).send({
                            message: "Password reset successfully",
                        }));
                });
        });
});

export default router;