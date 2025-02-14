const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    following:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    email: String,
    ciudad: String,
    pais: String,
    lema: String,
    telefono: Number,
    photoURL: String,
    nombre: String,
    apellido: String,
    comida:[
        {
            type: Schema.Types.ObjectId,
            ref: "Comida"
        }
    ]
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})

module.exports = mongoose.model('User', userSchema)
