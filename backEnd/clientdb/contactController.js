// contactController.js

// Import contact model
Contact = require('./contactModel');

Insert = require('./insertschema');

// Handle index actions
exports.index = function (req, res) {
    Contact.find({},function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
       
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
     
 });
                                                                                                                                                
};




//SIGN-UP ACTIONS
// Handle create contact actions
exports.new = function (req, res) {
    console.log(req.body);
    var contact = new Contact();
    contact.name = req.body.name;
    contact.Email = req.body.Email;
    contact.PhoneNumber = req.body.PhoneNumber;
    contact.Password = req.body.Password;
    contact.address  = req.body.address;


// save the contact and check for 
//CONSOLE MESSAGE NEW CONTACT CREATED
    contact.save(function (err) {
        if (err)
             res.json(err);
else{
res.json({
            message: 'New contact created!',
            data: contact
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }
    });
};





// Handle view contact info
exports.view = function (req, res) {
    console.log(req.params.contact_id)
    Contact.findOne({PhoneNumber:req.params.contact_id}, function (err, contact) {
        if (err){
            res.send(err) 
        } 
            else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
        res.json({
            message: 'Contact details loading..',
            data: contact
        });}
    });
};



// Handle update contact info
exports.update = function (req, res) {

Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);

contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        authenticate


        
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};



// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};

 


const jwt = require('jsonwebtoken');
const JWT_SECRET=`dfjh`
exports.authenticate = function(req, res) {
    
    console.log(`Phone : `,req.body.PhoneNumber);



        let phonenumber = req.body.PhoneNumber;
        Contact.find({
          $and: [{ PhoneNumber: phonenumber }, { Password: req.body.Password }]
        }).then(user => {
            console.log(user)
          if (user[0]) {
            let token = jwt.sign(user[0].toJSON(), JWT_SECRET);
            console.log(user[0]);
            res.send({
              signed_user: user,
              token: token
            });
          } else {
            res.send({
              msg: "error"
            });
          }
        });
    }



    exports.check = function(req,res) {
        console.log("verifying");
        let token = req.headers["authorization"];
        console.log(token);
        jwt.verify(token, JWT_SECRET, (err, decode) => {
          if (err) {
            console.log("error decoding");
            res.send({ isValid: false });
          } else {
            console.log("decoding successfull");
            res.send({ isValid: true });
          }
        });
      };




    exports.xyz = function (req, res) {
        console.log(req.body);
        var insert1 = new Insert();
        insert1.productName = req.body.productName;
        insert1.productDescription = req.body.productDescription;
        


        
    // save the contact and check for errors
        insert1.save(function (err) {
            if (err)
                 res.json(err);
    else{
    res.json({
                message: 'detail save successful',
                data: insert1
            });
        }
        });
    };
    
    
    exports.show2 = function (req, res) {
        Insert.find({},function (err, insert) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            else{
            res.json({
                status: "success",
                message: "productList retrieved successfully",
                data: insert
                                    });   }                                                  
            
        });
    };
    


// Handle view contact info
//exports.referral = function (req, res) {
  //  console.log(req.body.PhoneNumber)
    //PhoneNumber=req.body.PhoneNumber
    //Contact.find({referralLink:PhoneNumber}, function (err, contact) {

      //  var referral = "http://localhost:4200/sign-up?referrer=";
        //var mssg = referral + PhoneNumber;
        //if (err)
        //{
          //  res.send(err);
       // }
        //else
        //{
          //  res.json({msg:mssg});
        //}
        //});
    //};


    // Handle view contact info
// exports.signup = function (req, res) {
//     console.log(req.body.PhoneNumber)

    
//         });
//     };




//exports.parent = function (req, res) {
//console.log(req.params.contact_id)
 ///   referralLink = req.body.referralLink
  //  Contact.findOne({referralLink:referralLink}, function (err, contact) {
    //    if (err){
      //      res.send(err) 
        //} 
          //  else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
        //res.json({
          //  message: 'Contact details loading..',
            //data: contact
        //});}
    //});
//};



// Handle view contact info
//exports.referralView = function (req, res) {
  //  console.log(req.params.contact_id)
  //  Contact.find({referralLink:req.params.contact_id}, function (err, contact) {
  //      if (err){
  //          res.send(err) 
//} 
  //          else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
  //      res.json({
  //          message: 'referral details loading..',
  //          data: contact
  //      });}
  //  });
//};



































































// exports.WalletUpdate = function (req, res) {

//     Contact.findById(req.params.contact_id, function (err, contact) {
//             if (err)
//                 res.send(err);
    
//     contact.name = req.body.name ? req.body.name : contact.name;
//             contact.gender = req.body.gender;
//             contact.email = req.body.email;
//             contact.phone = req.body.phone;
//             authenticate
//     // save the contact and check for errors
//             contact.save(function (err) {
//                 if (err)
//                     res.json(err);
//                 res.json({
//                     message: 'Contact Info updated',
//                     data: contact
//                 });
//             });
//         });
//     };
    