import React from "react";
import "../css/styles.css";


const NavBar = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand TodosLoProductos" data-categoria = "Productos" href="#!">Borboleta</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link filtrarCategorias" aria-current="page" data-category="Animales">Animales</a></li>
                    <li class="nav-item dropdown">
                </li>
                <li class="nav-item"><a class="nav-link filtrarCategorias" data-category = "Personajes" href="#!">Personajes</a></li>
                <li class="nav-item"><a class="nav-link filtrarCategorias" data-category = "Objetos" href="#!">Objetos</a></li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Carrito 
                    <span id= "carritoTotal" class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
            </form>
        </div>
    </div>
</nav>
  }
  
  export default NavBar;