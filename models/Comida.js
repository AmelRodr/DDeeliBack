const mongoose = require('mongoose')
const Schema = mongoose.Schema


const comidaSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    following:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    price: String,
    description: String,
    fecha  : Date,
    horario: String,
    photoURL: String,
    pictures:[
        {
            type: Schema.Types.ObjectId,
            ref: "Picture"
        }
    ]
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})


module.exports = mongoose.model('Comida', comidaSchema)
