//import React from 'react'

const HeroSection = () => {
  return (
    <main  className="hero container">
    <div className= "hero-content">
        <h1>Your Feet DESERVES THE BEST</h1>
        <p>
            YOUR FEET DESERVE THE BEST AND  WE ARE HERE TO HELP OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>
    
    <div className="hero-btn">
    <button>Shop Now</button>
    <button className="secondary-btn">Category</button>
    </div>
    <div className="shopping">
    <p>Also Available On</p>
    <div className="brand-icons">
        <img src="public/images/amazon.png" alt="amazon-icon"/>
        <img src="public/images/flipkart.png" alt="flipkart-icon"/>
    </div>
    </div>
    </div>
    <div className="hero-image">
    <img src="public/images/hero-image.png" alt="nikeshoe-icon"/>
    </div>

    </main>
  );
}

export default HeroSection;
