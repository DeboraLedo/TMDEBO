import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Usuarios = () => {
  const { user } = useContext(AuthContext);
  /*   const [favoritos, setFavoritos] = useState([]); */
  const [usuarios, setUsuarios] = useState([]);
  //traigo todos los usuarios
  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => res.data)
      .then((data) => {
        setUsuarios(data);
      });
  }, []);
  //los filtro para sacar el usuario logueado
  const usuariosFiltrados = usuarios.filter(
    (usuario) => usuario.nombre !== user.nombre
  );
  //hago una funcion para que cuando hagan click en el usuario muestren los favoritos
  const [favoritos, setFavoritos] = useState([]);
  const showFav = (userFav) => {
    axios
      .get(`/api/favoritos/${userFav.id}`)
      .then((res) => res.data)
      .then((data) => {
        setFavoritos(data);
      });
  };

  return (
  
      <div className="peli_serie">
        <div className="columns">
       
          <div className="column is-one-fifth">
            <p className="menu-label">Usuarios</p>
          
          <ul className="menu-list">
            {usuariosFiltrados.map((user) => (
              <li key={user.id}>
               <button className="button is-primary is-small" onClick={() => {showFav(user)}}>{user.nombre}</button>
              </li>
            ))}
          </ul>
          </div>
          
        <div className="column">
      {favoritos && (
        
          <div className="container ">
            {favoritos?.map((peli) => {
              //
              return (
                <div className="card" key={peli.id}>
                  <img
                    className="imgcard"
                    src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}
                    alt={peli.title}
                  ></img>
                  <div>
                    <h4 className="title">{peli.title}</h4>
                    <p className="descripcion">{peli.overview}</p>
                  </div>
                  <h1 className="puntuacion">{peli.vote_average}</h1>
                </div>
              );
            })}
          </div>
     
      ) }
      </div>
      </div>
       </div>
  

  );
};

export default Usuarios;
