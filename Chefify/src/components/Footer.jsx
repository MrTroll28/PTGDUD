import React from "react";
import logo from "/FooterLogo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section about">
                <div>
                    <h3>About Us</h3>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="subscribe">
                        <input type="email" placeholder="Enter your email" />
                        <button>Send</button>
                    </div>
                </div>
                <div className="footer-logo-container">
                    <img className="footer-logo" src={logo} alt="Cheffy Logo" />
                    <p>2023 Cheffy Company &nbsp; | &nbsp; <a href="#">Terms of Service</a> &nbsp; | &nbsp; <a href="#">Privacy Policy</a></p>
                </div>
            </div>

            <div className="footer-section">
                <h3>Learn More</h3>
                <ul>
                    <li><a href="#">Our Cooks</a></li>
                    <li><a href="#">See Our Features</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>

                <h3>Shop</h3>
                <ul>
                    <li><a href="#">Gift Subscription</a></li>
                    <li><a href="#">Send Us Feedback</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Recipes</h3>
                <ul>
                    <li><a href="#">What to Cook This Week</a></li>
                    <li><a href="#">Pasta</a></li>
                    <li><a href="#">Dinner</a></li>
                    <li><a href="#">Healthy</a></li>
                    <li><a href="#">Vegetarian</a></li>
                    <li><a href="#">Vegan</a></li>
                    <li><a href="#">Christmas</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
