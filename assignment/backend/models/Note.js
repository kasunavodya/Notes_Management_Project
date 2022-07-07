/**
 * Note Model created to store the note details on the database
 * 
 * --scope - Note Management
 * 
 * --author Kasuni Makalanda
 *
 */

//Importing the mongoose from the installed package - mongoose@8.0.2
const mongoose = require('mongoose');

/**
 * Schema name (local) - noteSchema
 */
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

/**
 * Schema name on the database - Note
 * 
 * Exported model to be used on the Note route
 */
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;