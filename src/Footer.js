import React from "react";
import "./images/logo.png";
import img1 from "./images/01-1-1-300x300.png"
import img2 from "./images/01-2-300x300.png"
import img3 from "./images/logo.png"

function Footer(){
    return(
        <footer id="footerSection">
            <div id="flexBackground">
                <div id="container">
                    <img src={img3} alt="img" />
                    <p>One is to focus on the quality of your meat. If you<br/>can call out organic beef, sustainable farming.</p>
                    <p><strong>Phone:</strong>+92300-400-2333</p>
                    <p><strong>Email:</strong>restaurant@gmail.com</p>
                </div>

                <div id="container">
                    <h3>Our Service</h3>
                    <p><button href="#">All Vendors</button></p>
                    <p><button href="#">Blog</button></p>
                    <p><button href="#">Home 1</button></p>
                    <p><button href="#">Home 2</button></p>
                    <p><button href="#">Main Home</button></p>
                </div>

                <div id="container">
                    <h3>Latest News</h3>
                    <div className="s-container">
                        <div className="image">
                            <img src={img1} alt="img" />
                        </div>
                            <p><strong>Barbecue Burgers With Sweet Chili<br/>Mayo</strong><br/>
                            March 19, 2022</p>
                    </div>

                    <div className="s-container">
                        <div className="image">
                            <img src={img2} alt="img" />
                        </div>
                            <p><strong>Barbecue Burgers With Sweet Chili<br/>Mayo</strong><br/>
                            March 19, 2022</p>
                    </div>
                </div>

                <div id="container">
                    <h3>Useful Links</h3>
                    <p><button href="#">All Vendors</button></p>
                    <p><button href="#">Home 1</button></p>
                    <p><button href="#">Home 1</button></p>
                    <p><button href="#">Home 1</button></p>
                    <p><button href="#">Pricing Plan</button></p>
                </div>
            </div>

            <p>Copyright 2022 @ Theme Created By <strong> AsEDeyHot</strong> All Rights Reserved</p>
        </footer>
    )
}

export default Footer;