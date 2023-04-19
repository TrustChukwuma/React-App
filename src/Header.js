import React from "react";
import img1 from "./images/logo.png"


function Header(){
    return(
        <header id="navbar">
            <img src={img1} alt="img" />
            <ul>
                <li><button href="#">Home</button></li>
                <li><button href="#">About</button></li>
                <li><button href="#">Shop</button></li>
                <li><button href="#">Orders</button></li>
                <li><button href="#">Login</button></li>
                <li><button href="#">Register</button></li>
            </ul>
        </header>
    )
}
export default Header;