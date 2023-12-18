import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="right-icons">
          <img src="/images/flower.png" alt="" />
        </div>
        <center>
          <h1>LOGO</h1>
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </center>
        <div className="left-icons">
        <img src="/images/heart.png" alt="" />
          <img src="/images/shopping-bag.png" alt="" />
          <img src="/images/account.png" alt="" />
        </div>
      </div>
      <hr />

      <div className="heading">
        <h1>DISCOVER OUR PRODUCTS </h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
      </div>
      <br />     
      <hr />
    </nav>
  );
}

export default Navbar;

