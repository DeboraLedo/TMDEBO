import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const serieUrl =
  "https://api.themoviedb.org/3/tv/popular?api_key=7737eb5d8db436673b45efb8e8226132";

const Series = () => {
  const { user } = useContext(AuthContext);
  const [series, setSeries] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    axios
      .get(serieUrl)
      .then((res) => res.data)
      .then((data) => {
        setSeries(data.results);
      });

    axios
      .get(`/api/favoritos/${user.id}`)
      .then((res) => res.data)
      .then((data) => {
        setFavoritos(data);
      });
  }, []);

  let movieID = [];

  favoritos.map((movie) => {
    movieID.push(movie.movie_id);
    return movieID;
  });

  const addFavoritos = (serie) => {
    axios
      .post(`/api/favoritos`, {
        movie_id: serie.id,
        title: serie.name,
        overview: serie.overview,
        vote_average: serie.vote_average,
        poster_path: serie.poster_path,
        userId: user.id,
      })
      .then(() => console.log("add"))
      .catch((error) => console.log(error));
  };

  return (
    <section className="peli_serie">
      <div className="container">
        {series?.map((serie) => {
          if (!movieID.includes(serie.id))
            return (
              <div className="card" key={serie.id}>
                <img
                  className="imgcard"
                  src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
                  alt={serie.name}
                ></img>
                <div>
                  <h4 className="title">{serie.name}</h4>
                  <p className="descripcion">{serie.overview}</p>
                </div>
                <h1 className="puntuacion">{serie.vote_average}</h1>
                <button
                  className="button is-info is-light is-small"
                  onClick={() => {
                    addFavoritos(serie);
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

export default Series;
