import React, { useState, useEffect } from "react";
import axios from 'axios'

const Login = props => {
  const[user, setUser] = useState({ username: '', password: '' })

  const handleChange = e => {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  const loginSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login')
  }




  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form>
        <input type='text' name='username' value={user.username} placeholder='Username' onChange={handleChange} />
        <input type='text' name='password' value={user.password} placeholder='Password' onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
