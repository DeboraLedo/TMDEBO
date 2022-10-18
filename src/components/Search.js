import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const busqueda = `https://api.themoviedb.org/3/search/movie?=${search}`;

  const showResults = (e) => {
    e.preventDefault();
    axios
      .get(busqueda)
      .then((res) => res.data)
      .then((data) => {
        setResults(data.results);
      });
  };

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

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
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

  return (
    <>
      <div className="peli_serie">
        <label>
          <input
            value={search}
            type="text"
            placeholder="search"
            onChange={searchOnChange}
          />
          <button onClick={showResults}>Search movies</button>
        </label>
      </div>

      <section className="peli_serie">
        <div className="container">
          {results?.map((peli) => {
            if (!movieID.includes(peli.id))
              return (
                <div className="card" key={peli.id}>
                  <img
                    className="imgcard"
                    src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}
                    alt={peli.title}
                  ></img>
                  <div>
                    <h4 className="title">{peli.name}</h4>
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
    </>
  );
};

export default Search;
