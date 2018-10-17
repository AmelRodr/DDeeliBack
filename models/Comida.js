const mongoose = require('mongoose')
const Schema = mongoose.Schema


const comidaSchema = new Schema({
    title : {
        type: String,
        required:true
    },
    price: String,
    description: String,
    date  : Date,
    horario: String,
    profilephoto: String,
    pictures:[String],
    Rate:Number,
    type:String,
    user:
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})


module.exports = mongoose.model('Comida', comidaSchema)
