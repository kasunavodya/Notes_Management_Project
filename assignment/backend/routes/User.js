 const router = require('express').Router();

 const UserModel = require('../models/User');
 
 router.route('/addUser').post(async (req, res) => {
     if (req.body) {
 
         const User = new UserModel(req.body);
         await User.save()
             .then(data => {
                 res.status(200).send({ data: data });
             }).catch(error => {
                 res.status(500).send({ error: error });
             })
     }
 });
  
 router.route('/getUserByEmailID/:id').get(async (req, res) => {
     if (req.params && req.params.id) {
         await UserModel.find({ userEmail: req.params.id })
             .then(data => {
                 res.status(200).send({ data: data });
             }).catch(error => {
                 res.status(500).send({ error: error });
             })
     }
 });

 router.route('/validateUser/:emailID').get(async (req, res) => {
    if (req.params && req.params.emailID) {
        await UserModel.find({ userEmail: req.params.emailID })
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
})

router.route('/getAllUsers').get(async (req, res) => {
    await UserModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

router.route('/getAllAdministrators').get(async (req, res) => {
    await UserModel.find({ userCategory: 'Administrator' })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

router.route('/getAllStudents').get(async (req, res) => {
    await UserModel.find({ userCategory: 'Student' })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

router.route('/getUserById/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await UserModel.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

router.route("/resetPassword/:id").put(async (req, res) => {
    
    const newPassword = req.body.newPassword;
    const Id = req.params.id;

    try {
        await UserModel.findById(Id, (err, updatedUserObject) => {
            updatedUserObject.userPassword = newPassword;
            updatedUserObject.save()
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
   
 module.exports = router;