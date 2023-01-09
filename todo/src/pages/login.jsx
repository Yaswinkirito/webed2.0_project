import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login_user } from '../redux/actions'
import '../styles.css'


const Login = () => {
  const [name, setName] = useState('');
  
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
      e.preventDefault();
      const data = {
        name: name,
        password: password,
      };
      dispatch(login_user(data));

     
      setName('');
      setPassword('');
  }
  const onUserChange = (e) => {
    setName(e.target.value);
  }
  const onPassChange = (e) => {
    setPassword(e.target.value)
  }




    return(
        
        <div className="myStyle" >    
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <div className="text-white display-6">Welcome Back</div>
              <label className="text-white">Username</label>
              <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" name="name"  onChange={onUserChange} />
              
            </div>
            <div className="form-group">
              <label className="text-white">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={onPassChange} />
            </div>
          
            <button type="submit" className="btn btn-primary" style={{marginTop: 5}} >Log In</button>
          </form> 
          </div>
            
    );
}

export default Login;