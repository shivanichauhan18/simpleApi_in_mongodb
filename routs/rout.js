let EmailModel = require('../src/models/emails')

var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
router.use(bodyParser.urlencoded({ extended: true }))

router.get("/find",(req,res)=>{
    EmailModel.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
})

router.post("/add",(req,res)=>{
    let mail = req.body.email
    let age=req.body.age
    let details = {
        email:mail,
        age:age
    }
    let msg = new EmailModel(details)
      msg.save()
         .then(doc => {
           console.log(doc)
           res.send(doc)
         })
         .catch(err => {
           console.error(err)
           res.send(err)
         })
})

module.exports = router