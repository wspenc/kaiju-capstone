import React from 'react'
import {BsPerson, BsQuestionCircle, BsBag, BsPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => { 
  const username = useSelector(state => state.username)
  const dispatch = useDispatch()
  const logout = () => {
    dispatch({type: 'LOGOUT'})
  }
  return (
    <header>
      <Link to="/">
        <button className='title-btn'>
          <h2>Kaiju Shoes</h2>
        </button>
        </Link>
        <div>
       
        <Link to="/men">
          <button className='header-nav'>Mens</button>
          </Link>
        <Link to="/women">
          <button className='header-nav'>Womens</button>
        </Link>
        <Link to="/kids">
          <button className='header-nav'>Kids</button>
        </Link>
        </div>
        <div className='icon-container'>
        {username !== ""
        ? <button className='icons-btn' onClick={logout}>
          <BsPersonFill className="icons" size="32px" />
        </button>
        :
        <Link to="/login">
        <button className='icons-btn'>
          <BsPerson className='icons' size="32px" />
        </button>
        </Link>
    }
        <Link to="/cart">
          <button className='icons-btn'>
            <BsBag className='icons' size="30px" />
          </button>
          </Link>  
        <Link to ="/faq">
          <button className='icons-btn'>
            <BsQuestionCircle className='icons' size="27px" />
          </button>
          </Link>
        <h3 className='user'>{username !== "" ? username: "Guest"}</h3>

        </div>
    </header>
    
  )
}

export default Header