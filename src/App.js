import React from "react";
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Containers - ItemListContainer/ItemListContainer";
//import Header from "./Componentes/Header";

const App = () => {

  const mensaje = "Bienvenidos a Borboleta Online"

  return (
    <>
    <NavBar/>
    <ItemListContainer 
    greeting={mensaje}/>
    </>
  )
}

export default App;
