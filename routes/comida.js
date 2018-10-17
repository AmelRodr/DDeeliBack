const express = require('express')
const router = express.Router()
const Comida = require('../models/Comida')
const passport = require('passport')
const {generateToken, verifyToken} = require('../helpers/jwt')
const User = require('../models/User')
const multer = require('multer')
const upload = multer({ dest: './public/pics/' })
const uploadCloud = require('../helpers/cloudinary')

router.get('/private', verifyToken, (req,res,next)=>{
    res.send("Esto sololo ven los usuarios logueados como tu " + req.user.username)
})

router.get('/own',verifyToken,(req,res,next)=>{
    Comida.find({user:req.user._id})
    .then(platillos => res.status(200).json(platillos))
    .catch(e=>next(e))

})

router.post('/',verifyToken, uploadCloud.array('images'),(req,res,next)=>{
    const pictures = []
    if(req.files){
        
        req.files.map(f=>pictures.push(f.url))
    }
    Comida.create({...req.body,user:req.user._id, pictures})
      .then(comi=>{
        User.findByIdAndUpdate(req.user._id,{$push:{comida:comi._id}})
        .then(user =>{
            res.status(200).json(user)
        }).catch(e=>next(e))
        res.status(200).json(comi)
    })
    .catch(e=>next(e))
})



module.exports = router