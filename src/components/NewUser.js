import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewUser = () => {

  let navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const nombreOnChange = (e)=>{
    setNombre(e.target.value)
  }

  const apellidoOnChange = (e)=>{
    setApellido(e.target.value)
  }

  const emailOnChange = (e)=>{
    setEmail(e.target.value)
  }

  const passwordOnChange = (e)=>{
    setPassword(e.target.value)
  }


const formSubmit = (e)=>{

  e.preventDefault()

  axios.post('/api/user',{
    nombre,
    apellido,
    email,
    password,
  })
  .then(()=> navigate("", { replace: true }))
  .catch(error =>  console.log(error))
}

  return (
    <div className="peli_serie">
      <form onSubmit={formSubmit}>
        <label className="label">Nombre:  
          <input value={nombre} type="text" onChange={nombreOnChange}/>
        </label><br/>
        <label className="label">Apellido:  
          <input value={apellido} type="text" onChange={apellidoOnChange}/>
        </label><br/>
        <label className="label">Email:  
          <input value={email}type="text" onChange={emailOnChange}/>
        </label><br/>
        <label className="label"> Contraseña:  
          <input value={password}type="password" onChange={passwordOnChange}/>
        </label><br/>
        <button className="button is-small is-link">Submit</button>
      </form>
     
    </div>
  );
};

export default NewUser;
