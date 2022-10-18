import { Link } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import {AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {isAuthenticated , toggleAuth , user} = useContext(AuthContext)
  let navigate = useNavigate();
  return (
    <nav className="navbar ">
      <Link to="">
        <h3 className="titulo">TMDEBO</h3>
      </Link>

      <div className="navbar-item navbar-end">
      {isAuthenticated ?
      <>
      <Link to="/usuarios">
          <button className="button is-link is-light is-small">Ver otros usuarios</button>
        </Link>
         <Link to="/peliculas">
          <button className="button is-link is-light is-small">Show Peliculas</button>
        </Link>

        <Link to="/series">
          <button className="button is-link is-light is-small">Show series</button>
        </Link>

        <Link to="/search">
          <button className="button is-link is-light is-small">Search</button>
        </Link>
        <Link to="/favoritos">
          <button className="button is-link is-light is-small">Favoritos</button>
        </Link>
        <button className="button is-primary is-small "onClick={()=>{toggleAuth(user);navigate("/", { replace: true })}}>LogOut</button>
        </> : <>
        
        <Link to="/login">
          <button className="button is-primary is-small">Login</button>
        </Link>
     
        <Link to="/newUser">
          <button className="button is-light is-small">New User</button>
        </Link>
    
        </> }

       
      </div>
    </nav>
  );
};

export default Navbar;
