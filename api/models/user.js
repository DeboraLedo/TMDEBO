const S= require('sequelize')
const db= require('../db')

class User extends S.Model{
 /*    validatePassword(password){
       return password === this.password ? true : false
    } */
}

User.init({
    nombre:{
        type: S.STRING,
        allowNull: false,
    },
    apellido:{
        type: S.STRING,
        allowNull: false,
    },
    email:{
        type:S.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:S.STRING,
        allowNull:false,
       
    }

},{sequelize:db, modelName:'user'})



module.exports= User;