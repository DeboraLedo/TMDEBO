// Configuración del server

const express= require('express')
const app = express()  
const db = require('./db')//carpeta de configuracion de db
const volleyball = require("volleyball");
const routes= require('./routes')//carpeta routes

app.use(volleyball);
const User= require('./models/user')//models importados para que node los lea
const Favoritos = require ("./models/favoritos")
app.use(express.json())



//routas
app.use('/api', routes)

app.use("/api", (req, res) => {
    res.sendStatus(404);
  });

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

//sincronizacion de db
db.sync({force:false}).then(()=>{ 
app.listen(3001, ()=> console.log('server levantado en puerto 3001'))
})

module.exports= app;