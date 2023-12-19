const mongoose = require('mongoose');
//Database schemas
const userSchema = new mongoose.Schema({
    username:String,
    password:String
})
const User = mongoose.model('User',userSchema);

module.exports = User;