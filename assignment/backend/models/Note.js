const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    datetime: {
        type: String,
        required: true,
        trim: true
    }
}) 

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;