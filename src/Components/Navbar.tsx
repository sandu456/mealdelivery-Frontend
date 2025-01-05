import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Meal Delivery </h1>
      <ul>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>

      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/About-Us">AboutUs</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>

    
    
  );
};

export default Navbar;