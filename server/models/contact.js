/* models/contact.js - Chloe Baker - 301062067 - October 22, 2020 */
let mongoose = require('mongoose')

//Create a Mongoose model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts" //in MongoDB it is db.contacts.blah
});

module.exports = mongoose.model('Contact', contactModel); //turn contactModel into an actual model
//You get the insert(), remove(), update() through using the model