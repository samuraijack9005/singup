var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  number: Number,
  salary:Number,
  dob_year: { type: Date },
  
 
  
});
module.exports = mongoose.model('Book', BookSchema);
