const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },              
  surname: { type: String },            
  displayName: { type: String },     
  tel: { type: String }                 
});

module.exports = mongoose.model('User', userSchema);