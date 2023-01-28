import Bar from "./Bar.js";
import './navbar.css';

const NavBar = ({ sessionUser }) => {
    return (
    <Bar sessionUser={sessionUser}/>
  )
}

export default NavBar;