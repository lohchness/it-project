import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    mainApp: {
        type: String,
    },
    position: {
        type: String,
    },
    emailChange: {
        type: String,
    },
    picture: {
        type: String,
    }

})

const User = mongoose.model("users", UserSchema)

export default User;