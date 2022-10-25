import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

export default function UserDashboard() {
  return (
    <div className="container">
        <form className="form">
            <div className="content">
                {/* <div className="notification">
                    
                </div> */}

                <div className="buttons">
                    <button className="submitbtn">Apply for Grama certificate</button>
                </div>

                <div className="buttons">
                    <Link to="/user/status">
                        <button className="submitbtn">Check status</button>
                    </Link>
                </div>

                <div className="buttons">
                    <button className="submitbtn">Help</button>
                </div>

            </div>
        </form>

    </div>
  )
}
