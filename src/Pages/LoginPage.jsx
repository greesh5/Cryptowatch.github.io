import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './auth.css'
const LoginPage = () => {

  const [credentials, setCredentials] = useState({ email: '', password: ''})

  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault();
    // const User=JSON.parse(localStorage.getItem('credentials'))
    // get the user data from the localStorage if matches take the user to Home page
    const User = JSON.parse(localStorage.getItem('credentials'));
    if (User && User.email===credentials.email && credentials.password===User.password) {
      history.push('/');
      // valid credentials, navigate to main page
    } else {
      // invalid credentials, show alert
      alert('Credentials are not valid');
    }
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({...credentials ,[e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input email-input">
          <input type="email" placeholder='Enter you email..' required value={credentials.email} name="email" onChange={handleChange} />
        </div>
        <div className="input password-input">
          <input type="password" placeholder='Enter you password' required value={credentials.password} name="password" onChange={handleChange} />
        </div>
        <button type='submit'>Login</button>
        <div className="account">
          <span>Don't have an account?</span>
          <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage