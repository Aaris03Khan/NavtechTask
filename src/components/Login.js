import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      setError('');
      navigate('/Orders');
    } else {
      setError('Invalid username or password, username and password is "admin"');
    }
  }

  return (
    <div className='container w-25'>
      <div className='d-flex flex-column justify-content-center vh-100 align-items-center'>
          <h3 className='text-center'>Hey There!</h3>
          <h5 className='text-center mt-2'>Please Log In</h5>
          <input type="text" id="userName" className='form-control mt-2' onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' required autofocus/>
          <input type="password" id="userPassword" className='form-control mt-2' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required />
          <div className="checkbox text-center mt-2">
            <label>
              <input type="checkbox" value="remember-me" id="rememberMe" /> Remember me
            </label>
          </div>
          <button className='btn btn-lg btn-primary btn-block mt-2' onClick={handleSubmit} type='submit'>Login</button>
          <p className='text-center mt-2' style={{color: "red"}}>{error}</p>
      </div>
    </div>
  )
}