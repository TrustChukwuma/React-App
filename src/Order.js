import React from "react";
import img1 from "./images/01-1-1-300x300.png"
import img2 from "./images/01-2-300x300.png"
import img3 from "./images/02-2-300x300.png"
import img4 from "./images/04-2-300x300.png"
import img5 from "./images/05-2-300x300.png"
import img6 from "./images/06-2-300x300.png"
import { useState } from "react";

function Order(){
    const [food] = useState([
        {foodName: "Crispy Fry Burger", img: img1, description: 'Howdy Special. A well seasoned crispy fried<br/>chicken fillet slathered with a', price: '$690.00 <span>$600.00</span>', id:1},
        {foodName: "Fandango Burger", img: img2, description: 'Potato skins, chicken strips, toasted ravioli and<br/>mozzarella sticks served with', price: '$690.00 <span>$600.00</span>', id:2},
        {foodName: "Wrangler Burger", img: img3, description: 'Blackened chicken, sauteed onions and peppers<br/>smothered with pepper jack and', price: '$690.00 <span>$600.00</span>', id:3},
        {foodName: "Double Cheese Burger", img: img4, description: 'Special Burger, deep-fried beef ravioli served with<br/>marinara sauce and topped', price: '$690.00 <span>$600.00</span>', id:4},
        {foodName: "Cheddar Cheese Burger", img: img5, description: 'Hot & Grilled nachos smothered in cheder<br/>cheese, beef, black olives, onions.', price: '$690.00 <span>$600.00</span>', id:5},
        {foodName: "Howdy Hamburger", img: img6, description: 'Double Breast of a Chicken Burger With Spicy<br/>Red Sauce Try this new arrival to.', price: '$690.00 <span>$600.00</span>', id:6},
    ]);
    return(
        <section id="orderSection">
            <h3>Special Menu Pasta</h3>
            <div className="container">
            {
                food.map((food)=>(
                    <div className="post">
                        <h2>Post 1</h2>
                        <p>
                            Lorem....
                        </p>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default Order;