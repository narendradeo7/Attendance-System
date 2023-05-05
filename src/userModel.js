// requiring mongoose 

const mongoose = require("mongoose");

// creating schema for our collection on the mongodbatlas


const schema = new mongoose.Schema({
name:'String',
email:'String',
password:'String',
dob:'String',
gender:'String',
timestamp:'String',
enrollment:'String',
mobile:'String',

});

// providing schema 

const User =mongoose.model("User",schema);



// exporting user model 

module.exports=User;