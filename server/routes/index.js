/* routes/index.js - Chloe Baker - 301062067 - October 22, 2020 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

//Home page
router.get('/', indexController.displayHomePage);
//Home page (again incase someone types in /home)
router.get('/home', indexController.displayHomePage);
//About Me page
router.get('/about', indexController.displayAboutPage);
//Projects page
router.get('/projects', indexController.displayProductsPage);
//Services page
router.get('/services', indexController.displayServicesPage);
//Contact Me page
router.get('/contact', indexController.displayContactPage);

//GET route for displaying login page
router.get('/login', indexController.displayLoginPage);
//GET route for processing login page
router.post('/login', indexController.processLoginPage);
//GET route for displaying register page
router.get('/register', indexController.displayRegisterPage);
//GET route for processing register page
router.post('/register', indexController.processRegisterPage);
//GET to perform user logout
router.get('/logout', indexController.performLogout);

module.exports = router;
