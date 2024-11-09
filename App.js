// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import availableImage from './Images/avilable.jpg';
import allfriuts from './Images/allfruits.jpg';
import allvegetables from './Images/allvegetables.jpg';
import alloils from './Images/alloils.jpg';
import Product from './product'; // Ensure case matches actual file name
import FoodList from './FoodList';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility on smaller screens
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Main content */}
        <div className="maincontainer">
          <div className="container">
            <div className="options">
              <Link to="/fruits">Fruits & Vegetables</Link>
              <Link to="/oils">Oil & Masala</Link>
              <Link to="/beverages">Beverages</Link>
              <Link to="/snacks">Snacks</Link>
              <Link to="/beauty">Beauty & Hygiene</Link>
              <Link to="/baby-care">Baby Care</Link>
              <Link to="/dairy">Dairy</Link>
            </div>
          </div>
          <div className="mainimg">
            <img className="mainimg1" src={availableImage} alt="main" />
          </div>
        </div>

        <div className="content">
          <h1 className="mark">Welcome to OrganicOasis! Bringing joy to your grocery shopping. Your satisfaction, our priority.</h1>
        </div>

        <h1 className="head1">Fresh Basket</h1>
        <div className="mainimg2">
          <div className="fruits">
            <Link to="/fruits"><img className="img2" src={allfriuts} alt="fruits" /></Link>
            <div className="slideup1"><p className="para1">MIN 27% OFF</p></div>
          </div>
          <div className="fruits1">
            <Link to="/vegetables"><img className="img3" src={allvegetables} alt="vegetables" /></Link>
            <div className="slideup2"><p className="para2">MIN 27% OFF</p></div>
          </div>
          <div className="fruits2">
            <Link to="/oils"><img className="img4" src={alloils} alt="oils" /></Link>
            <div className="slideup3"><p className="para3">MIN 10% OFF</p></div>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/food-list" element={<FoodList />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

// Navbar component with active link handling
function Navbar({ menuOpen, toggleMenu }) {
  const location = useLocation();

  const getActiveClass = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav>
      <div className="logo">
        <h1 className="logo1">OrganicOasis</h1>
      </div>

      <ul id="menu-content" className={menuOpen ? 'active' : ''}>
        <li><Link to="/" className={getActiveClass('/')}>Home</Link></li>
        <li><Link to="/product" className={getActiveClass('/product')}>Products</Link></li>
        <li><Link to="/food-list" className={getActiveClass('/food-list')}>Food List</Link></li>
      </ul>

      {/* Hamburger menu for small screens */}
      <div className="menu" id="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
}

// Home component for default route
function Home() {
  return <h2>Welcome to OrganicOasis</h2>;
}

// Footer component
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About OrganicOasis</h2>
          <p>We are committed to providing high-quality organic products to our customers.</p>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@organicoasis.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OrganicOasis. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
