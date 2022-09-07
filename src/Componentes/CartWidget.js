import React from "react";
import "../css/styles.css";


const CartWidget = () => {
 
    return <div>
    <form class="d-flex">
    <button class="btn btn-outline-dark" type="submit">
        <i class="bi-cart-fill me-1"></i>
        Carrito 
        <span id= "carritoTotal" class="badge bg-dark text-white ms-1 rounded-pill">0</span>
    </button>
    </form>
    </div>
    }

    export default CartWidget;