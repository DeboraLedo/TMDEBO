import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const movies =
  "https://api.themoviedb.org/3/movie/popular?api_key=7737eb5d8db436673b45efb8e8226132";

const Peliculas = () => {
  const { user } = useContext(AuthContext);
  const [peliculas, setPeliculas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  
  useEffect(() => {
    axios
    .get(movies)
    .then((res) => res.data)
    .then((data) => {
      setPeliculas(data.results);
    });
//me traigo a favoritos para sacar los Id las peliculas para no mostrarlas ya que 
//ya esta en favoritos, para no guardar dos veces la misma pelicula
axios
.get(`/api/favoritos/${user.id}`)
.then((res) => res.data)
.then((data) => {
  setFavoritos(data);
});
  }, []);
//pusheo en un array los id delas peliculas q ya estan en favoritos
  let movieID = [];
  favoritos.map((movie) => {
    movieID.push(movie.movie_id);
    return movieID;
  });


  const addFavoritos = (peli) => {
    axios
    .post(`/api/favoritos`, {
      movie_id: peli.id,
      title: peli.title,
        overview: peli.overview,
        vote_average: peli.vote_average,
        poster_path: peli.poster_path,
        userId: user.id,
      })
      .then(() => console.log("add"))
      .catch((error) => console.log(error));
  };


  

  return (
    <section className="peli_serie">
      <div className="container">
        {peliculas?.map((peli) => {
          //chequeo que la peli no este en el array de pelis favoritas
          if (!movieID.includes(peli.id))
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
                <button
                  className="button is-info is-light is-small"
                  onClick={() => {
                    addFavoritos(peli);
                  }}
                >
                  Agregar a favoritos
                </button>
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default Peliculas;
