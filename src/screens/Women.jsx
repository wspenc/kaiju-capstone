import React from 'react'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <div>
    <div className="main-page">
    <h2>Women</h2>
      <img src="https://balenciaga.dam.kering.com/m/1f540e154c922d44/eCom-677390W1S8E5300_F.jpg?v=0" className="shoe-img" />
      <div className="shoe-details">
        <div>
          <h3 className="shoe-name">Balenciaga Crocs Madame</h3>
          <h3 className="shoe-price">$600</h3>
        </div>
       </div>
      <div className="description-container">
        <p className="shoe-description">
        Balenciaga collabed with Crocs to produce The Crocs Madame 80MM, made of 100% rubber and polyurethane.
        </p>
      </div>
      <Link to="/cart">
      <button className='bag-btn'>Add To Bag</button>
      </Link>
    </div>
    </div>
    
  )
}

export default Women