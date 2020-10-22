/* routes/contact.js - Chloe Baker - 301062067 - October 22, 2020 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

//Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//Connect to the contact model schema
//let Contact = require('../models/contact'); //Contact is capital as if it is a class

//GET route for the Contact list page - READ operation
//to contact list edit/add/delete it's like creating sub pages 
router.get('/', contactController.displayContactList);

/* CREATE operation */
//GET route for displaying the Add page - CREATE
router.get('/add', requireAuth, contactController.displayAddPage);

//POST route for processing the Add page - CREATE
router.post('/add', requireAuth, contactController.processAddPage);

/* UPDATE operation */
//GET route for displaying the Edit page - UPDATE
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

//POST route for processing the Edit page - UPDATE
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* DELETE operation */
//GET request to perform deletion - DELETE
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;