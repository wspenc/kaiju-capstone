import React, { useState, useRef} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const [signUp, setSignUp] = useState(false)
  const nameRef = useRef()
  const passRef = useRef()
  const dispatch = useDispatch()

  const change = () => setSignUp(!signUp)

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      username: nameRef.current.value,
      password: passRef.current.value
    }

    axios
    .post(signUp ? '/api/signup' : '/api/login', body)
    .then((res) => {
      dispatch({type: 'LOGIN', payload: res.data})
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }
  return (
    <div className='login-page'>
      <h2>{signUp ? "Sign-Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Username' ref={nameRef}/>
        <br />
        <input placeholder='Password' ref={passRef}/>
        <br />
        {/* <Link to="/"> */}
        <button className='login-btn'>{signUp ? "Sign-up" : "Login"}</button>
        {/* </Link> */}
        <br />
        <button className='signup-btn' onClick={change}>{!signUp ? "Sign-up" : "Already have an account login"}</button>
      </form>
   </div>
  )
}

export default Login