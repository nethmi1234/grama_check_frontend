import { Link } from "react-router-dom";
import welcome from '../../src/welcome.png';

const Welcome = () => {
  return ( 
    <div>  
      <br></br><br></br>
      
        <h1>Welcome to the grama check app</h1>
        <div>
          <img src={welcome} height="300px" width="500px" alt="This is the welcome img"/>
        </div>
        <br></br>
        <Link to="/login">
          <button className="submitbtn" style={{'width':'20%'}}>Continue</button>
        </Link>
        
    </div>
    
  );
}
 
export default Welcome;