const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   firstName: {
        type: String,
        required: true
   },
   lastName: {
       type: String,
       required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   phone: {
    type: String,
    required: true
   },
   address: {
    type: String,
    required: true
   },
   password: {
    type: String,
    required: true
   }
})

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;