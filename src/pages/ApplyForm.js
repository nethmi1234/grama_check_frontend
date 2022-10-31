import { Link } from "react-router-dom";
import Header from "../components/Header";

const ApplyForm = () => {
  return ( 
    <div>
      <Header/>
        
      <div className="container">
      <form className="form">
        
        <div className="content">
          
            <h2>Apply for certificate</h2>
            <br></br>

            <div className='title2'>
                <label>NIC number</label> <br></br>
                  <input type="email" className="div1" placeholder="Enter NIC number"/>  <br></br>
                <label>Address</label> <br></br>
                  <input type="password" className="div1" placeholder="Enter address"/>
            </div>
            
            <div className="buttons">
              <Link to="/user/status">
                <button type="submit" className="submitbtn">Submit</button>
              </Link>
            </div>

            </div>
        </form>
      </div>
    </div>
  );
}
 
export default ApplyForm;