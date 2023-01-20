import React from 'react'
import { Link } from 'react-router-dom'


const Kids = () => {
  return (
    <div>
    <div className="main-page">
    <h2>Kids</h2>
      <img src="https://cdn.shopify.com/s/files/1/1592/8069/products/solestage_Nike-Dunk-Low-UNC-_2021_-0-ZYC65R_57f2423f-a290-408e-8601-98ed9de25770_800x.png?v=1665589976" className="shoe-img" />
      <div className="shoe-details">
        <div>
          <h3 className="shoe-name">Nike Dunk Low University Blue</h3>
          <h3 className="shoe-price">$400</h3>
        </div>
       </div>
      <div className="description-container">
        <p className="shoe-description">
        The Univeristy Blue is a nod towards the University of North Carolina. The Dunk Low is made of white leather consisting of a nice blue overlay.
        </p>
      </div>
      <Link to="/cart">
      <button className='bag-btn'>Add To Bag</button>
      </Link>
    </div>
    </div>
    
  )
  }

export default Kids