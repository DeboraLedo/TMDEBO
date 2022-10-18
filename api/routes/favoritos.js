const router = require("express").Router();
const User = require("../models/user");
const Favoritos = require("../models/favoritos");

router.get("/",(req,res)=>{
    Favoritos.findAll()
    .then((favoritos)=>{res.send(favoritos)})
})

router.get("/:id",(req,res)=>{
    Favoritos.findAll({where:{userId:req.params.id}})
    .then((favoritos)=>{res.send(favoritos)})
})


router.post("/",(req,res)=>{
   Favoritos.create(req.body)
   .then((newFavoritos)=>{res.status(201).send(newFavoritos)})
})

router.delete('/:id', (req, res)=>{
    Favoritos.destroy({where:{id:req.params.id}})
    .then(()=> res.sendStatus(200))
})





module.exports= router
