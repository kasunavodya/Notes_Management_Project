const router = require('express').Router();

const NoteModel = require('../models/Note');

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

router.route('/getAllNotes').get(async (req, res) => {
    await NoteModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

router.route('/getNoteById/:id').get(async (req, res) => {
    if(req.params && req.params.id){
        await NoteModel.findById(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

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

router.route('/deleteNote/:id').delete(async (req, res) => {
    if(req.params && req.params.id){
        await NoteModel.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});
  
module.exports = router;