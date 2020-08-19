// let mongoose = require('mongoose')

// let emailSchema = new mongoose.Schema({
//   email: String
// })

// module.exports = mongoose.model('Email', emailSchema)

// let db = require("../database")
let mongoose = require('mongoose')
let validator = require('validator')

let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  age:{type:Number}
})

module.exports = mongoose.model('Email', emailSchema)