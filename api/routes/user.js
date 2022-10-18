const router = require("express").Router();
const User = require("../models/user");

router.get("/",(req,res)=>{
    User.findAll()
    .then((users)=>{res.send(users)})
})

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id).then((user) =>
      user ? res.json(user) : res.sendStatus(404)
    );
  });

router.post("/",(req,res)=>{
   User.create(req.body)
   .then((newUser)=>{res.status(201).send(newUser)})
})





module.exports= router


