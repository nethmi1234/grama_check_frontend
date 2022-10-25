import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

const url = "http://localhost:9090/getResult/?id=883561272V"

const Status = () => {

    const [status, setStatus] = React.useState("Pending");

    // if(status="Rejected"){
    //     setStatus("");
    // }

    React.useEffect(() => {
        // axios.get(url).then((response) => {
        //     console.log("hekko")
        //     console.log(response);
        // });
        getData();
      }, []);

      const getData = async () => {
        try {
            console.log("start");          
            const data = await axios.get("http://localhost:9090/getResult/883561272V");
            console.log("end");  
            console.log("data "+data);
            setStatus(data);
        } catch (e) {
          console.log(e);
        }
      };
    

    return ( 
        <div className="container">
            <div className="form">
                <p className="label">Your Grama certificate is <br></br><br></br>
                    <span class="badge">Rejected</span>
                </p>
                <div className="content">
                    <i class="fa fa-close" style={{color:'red', fontSize:'22px', margin:'5px'}}></i>
                    Your ID is incorrect<br></br>
                    {status}
                </div>
            </div>
        </div>
    );
}
 
export default Status;