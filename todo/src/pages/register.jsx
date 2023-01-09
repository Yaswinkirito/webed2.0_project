import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { register_user } from '../redux/actions'

const Register1 = () => {

    
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
  const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
          name: name,
          email: email,
          password: password,
        };
        dispatch(register_user(data));
       
        setName('');
        setEmail('');
        setPassword('');
    }
    const onUserChange = (e) => {
      setName(e.target.value);
    }
    const onPassChange = (e) => {
      setPassword(e.target.value)
    }
    const onEmailChange = (e) =>{
      setEmail(e.target.value)
    }

  return (
      <div className="myStyle">
      <form onSubmit={onFormSubmit}>
    
      <div className="form-group">
      <div className="text-white display-6">Register</div>
      <label className="text-white">Username</label>
      <input
        className='form-control'
        placeholder="Enter your name"
        name="name"
        onChange={onUserChange}
      />
      </div>
      <div className="form-group">
      <label className="text-white">Email</label>
      <input
      className='form-control'
      type="email"
        placeholder="Enter your email"
        name="email"
        onChange={onEmailChange}
      />
      </div>
      <div className="form-group">
      <label className="text-white">Password</label>
      <input
        className='form-control'
        placeholder="Enter strong password"
        name="password"
        onChange={onPassChange}
      />
    </div>
    <button type="submit" className="btn btn-primary" style={{marginTop: 5}} >Register</button>
    </form>
    </div>
  );
  };

export default Register1;