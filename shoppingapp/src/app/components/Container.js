//Base:
// import React from 'react';

// function Container() {
//   return (
//     <div className="container">
      // <div className="section-1">
      //   <div className="filter-section">
      //     <label htmlFor="ideal-for-dropdown">Ideal For</label>
      //     <select id="ideal-for-dropdown">
      //       <option value="men">Men</option>
      //       <option value="women">Women</option>
      //       <option value="kids">Kids</option>
      //     </select>
      //   </div>
      //   <hr />
      //   <div className="filter-section">
      //     <label htmlFor="fabric-dropdown">Fabric</label>
      //     <select id="fabric-dropdown">
      //       <option value="cotton">Cotton</option>
      //     </select>
      //   </div>
      //   <hr />
      //   <div className="filter-section">
      //     <label htmlFor="fabric">Fabric:</label>
      //     <select id="fabric">
      //       <option value="all">All</option>
           
      //     </select>
      //   </div>
      //   <hr />
      //   <div className="filter-section">
      //     <label htmlFor="Quantity">Quantity:</label>
      //     <select id="Quantity">
      //       <option value="all">All</option>
           
      //     </select>
      //   </div>
      //   <hr />
      //   <div className="filter-section">
      //     <label htmlFor="segment">Segment:</label>
      //     <select id="segment">
      //       <option value="all">All</option>
           
      //     </select>
      //   </div>
      //   <hr />
      //   <div className="filter-section">
      //     <label htmlFor="pattern">Pattern:</label>
      //     <select id="pattern">
      //       <option value="all">All</option>
           
      //     </select>
      //   </div>
      //   <hr />
      // </div>

//       <div className="section-2">
//         <h2>Section 2</h2>
//         <div className="product-grid">
//           <div className="product-card">
//             <img className='product-image' src='' alt="Product Image"/>
//             <h2>Product Title</h2>
//             <p>Description of Product 2.</p>
//             <p>Category</p>
//             {/* <label htmlFor="Quantity">Quantity:</label>
//             <div className="options d-flex flex-fill">
//              <select className="custom-select mr-1">
//                 <option selected>1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//             </select>
//             </div> */}
//             <div class="price text-success"><h5 class="mt-4">$125</h5></div>
//             <button className="button">Add to Cart</button>
//           </div>


//         </div>
//       </div>
//     </div>
//   );

// }

// export default Container;





"use client"
import React, { useState, useEffect } from 'react';

function Container() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []); 

  return (
    <div className="container">
      <div className="section-1">
      <div className="filter-section">
  <label htmlFor="customizable-checkbox">Customizable</label>
  <input
    type="checkbox"
    id="customizable-checkbox"
    name="customizable"
  />
</div>
<hr />

        <div className="filter-section">
          <label htmlFor="ideal-for-dropdown">Ideal For</label>
          <select id="ideal-for-dropdown">
          <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <hr />

        <div className="filter-section">
          <label htmlFor="fabric-dropdown">Ocassion</label>
          <select id="fabric-dropdown">
          <option value="all">All</option>
            <option value="cotton">Casual</option>
            <option value="cotton">Party wear</option>
            <option value="cotton">Formal</option>
          </select>
        </div>
        <hr />
        <div className="filter-section">
          <label htmlFor="fabric-dropdown">Work</label>
          <select id="fabric-dropdown">
            <option value="cotton">All</option>
          </select>
        </div>
        <hr />
        <div className="filter-section">
          <label htmlFor="fabric-dropdown">Fabric</label>
          <select id="fabric-dropdown">
          <option value="all">All</option>
            <option value="cotton">Cotton</option>
            <option value="cotton">Polyster</option>
            <option value="cotton">Silk</option>
            <option value="cotton">Linen</option>
            <option value="cotton">Hemp</option>
          </select>
        </div>
        <hr />
        <div className="filter-section">
          <label htmlFor="fabric">Segment:</label>
          <select id="fabric">
            <option value="all">All</option>
           
          </select>
        </div>
        <hr />
        <div className="filter-section">
          <label htmlFor="Quantity">Suitable For</label>
          <select id="Quantity">
            <option value="all">All</option>
           
          </select>
        </div>
        <hr />
        <div className="filter-section">
          <label htmlFor="segment">Raw Materials</label>
          <select id="segment">
            <option value="all">All</option>
           
          </select>
        </div>
        <hr />
        <div className="filter-section">
          <label htmlFor="pattern">Pattern:</label>
          <select id="pattern">
            <option value="all">All</option>
           
          </select>
        </div>
        <hr />
      </div>

      <div className="section-2">
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img className="product-image" src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <div className="price text-success">
                <h5 className="mt-4">${product.price}</h5>
              </div>
              <button className="button" >Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
