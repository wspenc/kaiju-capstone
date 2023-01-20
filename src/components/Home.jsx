import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-img1'>
          <img className='hero-img' src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0JTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className='hero-img2'>
         <img className='hero-img' src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0cyUyMHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
         </div>
         <div className='text1'>Step into 2023</div>
         <div className='text2'>With fresh kicks</div>
        <div className='hero-image'>
          <img className='hero-img' src="https://images.unsplash.com/photo-1566047230499-0b6d88beee82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHNwb3J0JTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        
    <Link to="/product/7">    
    <button className='hero-btn'>Shoe Collection</button>
    </Link>
      </div>
      <div className='img-div3'>
      <img className='pro-img' src="https://images.unsplash.com/photo-1529069596118-2223605f3733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGtpZCUyMGF0aGxldGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
      <Link to="/kids">
      <button className='pro-btn'>Shop Kids</button>
      </Link>
      </div>
      <div className='img-div1'>
      <img className='pro-img' src="https://images.unsplash.com/photo-1552321649-791e6f8460d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBpbiUyMGhvb2RpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <Link to="/women">
      <button className='pro-btn'>Shop Womens</button>
      </Link>
      </div>
      <div className='img-div2'>
      <img className="pro-img"src="https://images.unsplash.com/photo-1597677703512-2ce848dfd39b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbiUyMGluJTIwbmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <Link to="/men">
      <button className='pro-btn'>Shop Mens</button>
      </Link>
      </div>
      </div>
 
  )
}

export default Home
