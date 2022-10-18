

const S= require('sequelize')
const db= require('../db')

const User = require('./user');

class Favoritos extends S.Model{

}

Favoritos.init({
    title:{
        type: S.STRING,
        allowNull: false,
    },
   
    poster_path:{
        type: S.STRING,
        allowNull: false,
    },
    overview:{
        type: S.TEXT,
        allowNull: false,
    },
    vote_average:{
        type: S.DECIMAL,
        allowNull: false,
    },
    movie_id:{
        type: S.INTEGER,
        allowNull: false,
    },
    

},{sequelize:db, modelName:'favoritos'})



module.exports= Favoritos;

Favoritos.belongsTo(User);