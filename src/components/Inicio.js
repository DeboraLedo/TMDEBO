import React from "react";
import { useContext } from "react";
import {AuthContext } from "../context/AuthContext";




const Inicio = () => {
    const {isAuthenticated, user} = useContext(AuthContext)


    return (
        <article className="message is-link peli_serie">
        <div className="message-header">
          <p>Bienvenid@!!!! {isAuthenticated && user.nombre}</p>
         
        </div>
        <div className="message-body">
         Mi nombre es <strong>Debora</strong>, soy alumna de <a href="https://www.plataforma5.la/" target="_blank" rel="noreferrer noopener" >Plataforma 5</a>. Lo que ven aqui es mi primer <em>App!!</em>, por lo tanto no la juzguen. {!isAuthenticated? <p>Si ya sos usuario logueate!, sino, completa el formulario y chequea las utilidades. </p>:<p>Gracias por ser usuario, espero que la disfrutes!</p>} Comentarios a <strong>tmdebo@gmail.com</strong>
        </div>
      </article>
      );
};

export default Inicio;
