import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
  // const [shoe, setShoe] = useState({})
  // const { id } = useParams()

  // const getData = () => {
  //   axios
  //   .get(`/api/shoes/${id}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     setShoe(res.data)
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
  // }

  // useEffect(() => {
  //   getData()
  // }, )
  const [shoe, setShoe] = useState({})
  const {id} = useParams()

  useEffect(() => {
      axios
      .get(`/api/shoes/${id}`)
      .then((res) => {
          setShoe(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [id])
  console.log(shoe)

  return (
    <div className="main-page">
      <h2>Shoe Collection</h2>
      <img src={shoe.image} className="shoe-img" />
      <div className="shoe-details">
        <div>
          <h3 className="shoe-name">{shoe.name}</h3>
          <h3 className="shoe-price">${shoe.price}</h3>
        </div>
       </div>
      <div className="description-container">
        <p className="shoe-description">{shoe.description}</p>
      </div>
      <Link to="/cart">
      <button className='bag-btn'>Add To Bag</button>
      </Link>
    </div>
  )
}

export default Product