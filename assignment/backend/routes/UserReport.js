/**
 * Routes (API) for User Reports created to use API on the front end to perform
 * all opertaions related to User Reports
 * 
 * --scope - Notes Management
 * --Implemented APIs'  - ADD REPORT   | GET ALL REPORTS     
 * 
 * --author Kasuni Makalanda
 */

const router = require('express').Router();

/**
 * Imported Note Model - Note.js - MODEL
 */
const UserReportModel = require('../models/UserReport');

/**
 * API DESC      - Add user report
 * API           - http://localhost:3001/userreport/addUserReport 
 */
router.route('/addUserReport').post(async (req, res) => {
    if (req.body) {
        const UserReport = new UserReportModel(req.body);
        await UserReport.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/**
 * API DESC      - Get all the created user report
 * API           - http://localhost:3001/userreport/getAllUserReports 
 */
router.route('/getAllUserReports').get(async (req, res) => {
    await UserReportModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

module.exports = router;

