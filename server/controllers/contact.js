/* controllers/contact.js - Chloe Baker - 301062067 - October 22, 2020 */
//All the logic for the routes/contact.js file
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema (model)
let Contact = require('../models/contact'); //contact model

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => { //Contact model find
        if (err) 
        {
            return console.error(err);
        }
        else 
        {
            //print out the Contact list in the contact.ejs table
            res.render('contact/list', { 
                title: 'Contacts', 
                ContactList: contactList, 
                displayName: req.user ? req.user.displayName : '' });
        }
    }) 
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', { title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({ //Contact is the contact model
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contacts-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id; //search for this id in the database and update it

    Contact.findById(id, (err, contactToEdit) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: 'Update Contact', contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id, //going to overwrite the id
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    })

    //update the model
    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contacts-list');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contacts-list');
        }
    });
}