var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    courriel: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    }
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);