/**
 * Routes (API) for Notes created to use API on the front end to perform
 * all opertaions related to Notes
 * 
 * --scope - Notes Management
 * --Implemented APIs'  - ADD NOTE               | GET ALL NOTES      |  GET NOTE BY ID
 *                        UPDATE NOTE            | DELETE NOTE
 * 
 * --author Kasuni Makalanda
 *
 */

const router = require('express').Router();

/**
 * Imported Note Model - Note.js - MODEL
 */
const NoteModel = require('../models/Note');

/**
 * API DESC      - Create a new note
 * API           - http://localhost:3001/note/addNote 
 * TARGET USER   - Student
 */
router.route('/addNote').post(async (req, res) => {
    if (req.body) {

        const Note = new NoteModel(req.body);
        await Note.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/**
 * API DESC      - Get all created notes
 * API           - http://localhost:3001/note/getAllNotes 
 * TARGET USER   - Student
 */
router.route('/getAllNotes').get(async (req, res) => {
    await NoteModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/**
 * API DESC      - Get Note by ID
 * API           - http://localhost:3001/note/getNoteById/<ID> 
 * TARGET USER   - Student
 */
router.route('/getNoteById/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await NoteModel.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/**
 * API DESC      - Update Note details by ID
 * API           - http://localhost:3001/note/updateNote/<ID> 
 * TARGET USER   - Student
 */
router.route("/updateNote/:id").put(async (req, res) => {
    const subject = req.body.subject;
    const title = req.body.title;
    const description = req.body.description;
    const datetime = req.body.datetime;

    const Id = req.params.id;

    try {
        await NoteModel.findById(Id, (err, updatedNoteObject) => {
            updatedNoteObject.subject = subject;
            updatedNoteObject.title = title;
            updatedNoteObject.description = description;
            updatedNoteObject.datetime = datetime;

            updatedNoteObject.save()
                .then(data => {
                    res.status(200).send({ data: data });
                }).catch(error => {
                    res.status(500).send({ error: error });
                })
        });
    } catch (err) {
        console.log(err);
    }
});

/**
 * API DESC      - Delete Note details by using ID
 * API           - http://localhost:3001/note/deleteNote/<ID> 
 * TARGET USER   - Student
 */
router.route('/deleteNote/:id').delete(async (req, res) => {
    if (req.params && req.params.id) {
        await NoteModel.findByIdAndDelete(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

module.exports = router;