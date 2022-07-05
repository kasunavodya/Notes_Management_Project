const mongoose = require('mongoose');

const IUserSchema = new mongoose.Schema({
    userFullName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: { 
        type: String,
        required: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: true,
        trim: true
    },
    userContact: {
        type: String,
        required: true,
        trim: true
    },
    imageURL: {
        type: String,
        required:false,
        trim: true
    },
    userCategory: {
        type: String,
        required: true,
        trim: true
    },
    resetAnswer: {
        type: Number,
        required: true
    },
});

const IUser = mongoose.model("IUsers", IUserSchema);
module.exports = IUser;