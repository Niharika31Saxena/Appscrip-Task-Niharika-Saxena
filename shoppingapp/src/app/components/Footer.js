import React from 'react'

function Footer() {
  return (
    <footer>
<div className="row primary">
  <div className="column about">

  <h3>BE THE FIRST TO KNOW</h3>

   <p>
      Sign up for updates from abc.
  </p>
  <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>

  <div className="social">
    <i className="fa-brands fa-facebook-square"></i>
    <i className="fa-brands fa-instagram-square"></i>
    <i className="fa-brands fa-twitter-square"></i>
    <i className="fa-brands fa-youtube-square"></i>
    <i className="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div className="column links">
<h3>CONTACT US</h3>

 <ul>

  <li>
   <p>+44 221 133 5360</p>
  </li>
  <li>
   <p>customercare@abc</p>
  </li>
  <h3>Currency</h3>
  <li>
   <p>Payment & Pricing</p>
  </li>
  <li>
  <p>Transactions will completed in Euros and a currency reference is available on hover.</p>
  </li>
 </ul>

</div>


<div className="column links">
  <h3>QUICK LINKS</h3>
   <ul>

  <li>
   <p>Orders & Shipping</p>
  </li>
  <li>
   <p>Join/Login as a Seller</p>
  </li>
  <li>
   <p>Payment & Pricing</p>
  </li>
  <li>
  <p>Return & Refunds</p>
  </li>
   <li>
  <p>FAQs</p>
  </li>
   <li>
  <p>Privacy Policy</p>
  </li>
   <li>
  <p>Terms & Conditions</p>
  </li>
 </ul>

</div>

<div className="column subscribe">
 <h3>FOLLOW US</h3>
 <ul>
    <li>
  <div>
   icon
  </div>
</li>
<li>
    abc ACCEPTS
    </li>
<li>buttons</li>
</ul>
</div>

</div>

<div className="row copyright">
   <p> &copy; 2023 Your Company Name. All rights reserved.</p>
</div>
</footer>
  )
}

export default Footer