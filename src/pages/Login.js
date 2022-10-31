import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

export default function Login() {
  return (

    <div className="main">
      <form className="form">
        
        <div className="content">
          
            <h1>Grama App</h1>

            <h3>Login</h3>

            <div className='title2'>
                <label>Email address</label> <br></br>
                  <input type="email" className="div1" placeholder="Enter email"/>  <br></br>
                <label>Password</label> <br></br>
                  <input type="password" className="div1" placeholder="Enter password"/>
            </div>
            
            <div className="buttons">
              <Link to="/user">
                <button type="submit" className="submitbtn">Login</button>
              </Link>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
            <div>
                <p style={{width: '70px', textAlign: 'center'}}>OR</p>
            </div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} /></div>
          
            <span>
                Don't have an account ? <Link to="/signup">Sign up</Link>
            </span>

        </div>
      </form>
    </div>
  
  )
}
