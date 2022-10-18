const express= require('express')
const router= express.Router()
const user= require('./user')
const favoritos= require('./favoritos')
const User = require("../models/user");


router.use('/user', user)
router.use('/favoritos', favoritos)

router.post("/login",(req,res)=>{
    const {email , password} = req.body
    User.findOne({where: {email}})
    .then((user)=>{
     if(!user)return res.sendStatus(401);  
     if(user.password !== password){
        return res.sendStatus(401);
     }else{
        res.send(user);
     }
    })  
    .catch((error)=>console.log(error))
 })




module.exports= router