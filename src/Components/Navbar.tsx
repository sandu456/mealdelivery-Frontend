import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Meal Delivery </h1>
      <ul>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/vegetarian">Vegetarian</Link></li>
        <li><Link to="/vegan">Vegan</Link></li>
        <li><Link to="/pescatarian">Pescatarian</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;