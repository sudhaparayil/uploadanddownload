const mongoose = require("mongoose");
const config = require("../config/database");
// const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

const PhotoSchema = mongoose.Schema({
    filename : {
        type : String,
        require : true,
    },

    
  
});

const Photo = module.exports = mongoose.model('Photo', PhotoSchema, 'photo');