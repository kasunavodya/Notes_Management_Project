/**
* Routes (API) for Users created to use API on the front end to perform
* all opertaions related to Users
* 
* --scope - User Management
* --Implemented APIs'  - ADD USER               | GET ALL USERS      |  GET USER BY ID
*                        GET USER BY EMAIL      | VALIDATE USER      | GET ALL ADMINS
*                        GET ALL STUDENTS       | RESET PW
* --author Kasuni Makalanda
*
*/

const router = require('express').Router();

/**
* Imported user Model - User.js - MODEL
*/
const UserModel = require('../models/User');

/**
* API DESC      - Create a new user
* API           - http://localhost:3001/user/addUser
* TARGET USER   - Administrator / Student
*/
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

/**
* API DESC      - Get user details by using email
* API           - http://localhost:3001/user/getUserByEmailID/<ID> 
*/
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

/**
 * API DESC      - Validate user details by using email
 * API           - http://localhost:3001/user/validateUser/<emailID> 
 */
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

/**
 * API DESC      - Get all the user details
 * API           - http://localhost:3001/user/getAllUsers
 */
router.route('/getAllUsers').get(async (req, res) => {
    await UserModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/**
 * API DESC      - Get all the admin details
 * API           - http://localhost:3001/user/getAllAdministrators
 */
router.route('/getAllAdministrators').get(async (req, res) => {
    await UserModel.find({ userCategory: 'Administrator' })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/**
 * API DESC      - Get all the student details
 * API           - http://localhost:3001/user/getAllStudents
 */
router.route('/getAllStudents').get(async (req, res) => {
    await UserModel.find({ userCategory: 'Student' })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/**
 * API DESC      - Get user details by ID
 * API           - http://localhost:3001/user/getUserById/<ID>
 */
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

/**
 * API DESC      - Reset password using ID
 * API           - http://localhost:3001/user/resetPassword/<ID>
 */
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