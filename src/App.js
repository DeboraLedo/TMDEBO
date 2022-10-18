import "bulma/css/bulma.min.css" 
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import NewUser from "./components/NewUser";
import Series from "./components/Series";
import Login from "./components/Login";
import Search from "./components/Search";
import Favoritos from "./components/Favoritos";
import Usuarios from "./components/Usuarios";
import  AuthContext from "./context/AuthContext";


function App() {

 
  return (
    <>
  <AuthContext>
    
   
    <Navbar/>

      <Routes>
      <Route path="/usuarios" element={ <Usuarios/>}/>
      <Route path="/search" element={ <Search/>}/>
      <Route path="/peliculas" element={<Peliculas/>}/>
      <Route path="/series" element= { <Series/>}/>
      <Route path="/newUser" element={<NewUser/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/favoritos" element={<Favoritos/>}/>
      <Route path="" element={ <Inicio/>}/>
      </Routes>
      
   

  </AuthContext>

    </>
  );
}

export default App;