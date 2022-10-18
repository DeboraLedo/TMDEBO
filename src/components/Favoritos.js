import React,{useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import { useContext } from "react";
import {AuthContext } from "../context/AuthContext";



const Favoritos = () => {
  const {user} = useContext(AuthContext)
  const [favoritos, setFavoritos] = useState([]);
  const id = user.id
  

  useEffect(() => {
    axios
    .get(`/api/favoritos/${id}`)
    .then((res)=>res.data)
    .then((data)=>{setFavoritos(data)})
    

  },[])

  const deleteFavoritos = (id)=>{
    axios.delete(`/api/favoritos/${id}`)
    .then(()=> console.log("eliminado"))
    .catch(error =>  console.log(error))
  }


    return (
        <section className="peli_serie">
        <div className="container">
           
             {favoritos?.map((peli)=>{ //
                return (
                <div className= "card" key={peli.id}>
                <img className="imgcard" src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}alt={peli.title}></img>
                 <div>             
                <h4 className= "title">{peli.title}</h4>
                <p className="descripcion">{peli.overview}</p>
                </div>
                <h1 className="puntuacion">{peli.vote_average}</h1>
                <button className="button is-info is-light is-small" onClick={()=>{deleteFavoritos(peli.id) }}>Eliminar de favoritos</button> 
              
               </div>
              )
             })}
                 
                 </div>  
           
        </section>
      );
};

export default Favoritos;
