import React, { useState } from 'react'
import App from '../../App'
const Login = () => {
    const[useData,setUserData]=useState({
        usename:'',
        password:'',
    });

    const handleChange=(event)=>{
         const {name,value}=event.target;
         setUserData({...useData,[name]:value});
    }

    const submitChange=(event)=>{
        event.preventDefault();
        console.log(useData);
    }
  return (
    <div>
    <div className='form'>
      <form> 
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">UserName</label>
                    <input type="text" name="username" onChange={(event=>handleChange(event))} className="form-control" placeholder='Enter username'/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password"  onChange={(event=>handleChange(event))} className="form-control" placeholder='Enter password'/>
                </div>
                
                <button  onClick={(event)=>submitChange(event)} className="btn btn-primary">Submit</button>
            </form>
            </div>
    </div>
  )
}

export default Login
