import React from 'react'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <div className="main-page">
    <h2>Mens</h2>
     <img src="https://ccwh54no.cdn.imgeng.in/media/catalog/product/cache/f9298953e225fe5aa69348b5b4218d7e/S/m/Small_JPEG_cloud_fw21_zinc_white_m_g1_jpg.jpg" className="shoe-img" />
      <div className="shoe-details">
        <div>
          <h3 className="shoe-name">On Cloud 5</h3>
          <h3 className="shoe-price">$139.99</h3>
        </div>
       </div>
      <div className="description-container">
        <p className="shoe-description">
        The On Cloud 5 is made of 100% recycled material. With the ultra light weight and new tech comfort, you'll never be able to go back to any other running shoe.
        </p>
      </div>
      <Link to="/cart">
      <button className='bag-btn'>Add To Bag</button>
      </Link>
    </div>

  )
}

export default Men