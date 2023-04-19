import React from "react";
import Header from "./Header";
import './css/style.css';
import Order from "./Order";
import Footer from "./Footer";

function App(){
  return(
    <div id="wrapper">
      <Header />
      <div id="overlay">
        <section id="banner">
          <h2>Order Heathy and<br/> Fresh Food Any Time</h2>
          <p>Italian food makes people think of big<br/> family dinners. So you may want to position<br/> your restaurant as a place to bring the<br/> whole family.</p>
        </section>
      </div>
      <Order />
      <Footer />
    </div>
  )
}

export default App