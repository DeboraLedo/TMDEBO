import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { toggleAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((user) => {
        toggleAuth(user.data);
        navigate("/", { replace: true });
      })
      .catch((error) =>{ alert("contraseña o usuario invalido")});
  };

  return (
    <div className="peli_serie">
      <form onSubmit={formSubmit}>
        <div className="field">
          <label className="label">Email: </label>
          <div className="control">
            <input value={email} type="text" onChange={emailOnChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">contraseña: </label>
          <div className="control">
            <input
              value={password}
              type="password"
              onChange={passwordOnChange}
            />
          </div>
        </div>
        <button className="button is-small is-link">Login</button>
      </form>
    </div>
  );
};

export default Login;
