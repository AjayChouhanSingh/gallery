// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Welcome to Wow Events!',
    });
});

// Import contact controller
var contactController = require('./contactController');
// var User = require('../models/user');s
// var passport = require('passport');


// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

// router.route('/login')
//     .get(contactController.login);



//LOGIN
router.route('/contacts/authenticate') 
    .post(contactController.authenticate);





































    
router.route('/contacts/check')
    .post(contactController.check);

router.route('/contacts/insert')
    .post(contactController.xyz);


    
//SHOW-DATA
 router.route('/contacts/show')
     .get(contactController.show2);


//UPDATE     
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;