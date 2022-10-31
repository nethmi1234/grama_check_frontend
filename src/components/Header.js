import { Link } from "react-router-dom";


const Header = () => {
  return (  
    <div style={{textAlign:'right', margin:'20px'}}>
        <Link to="/login"><button className="logoutbtn">Log out</button></Link>
    </div>
  );
}
 
export default Header;