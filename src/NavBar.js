// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', marginBottom: '10px' }}>
        <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTYzXzEta2xnYXU0OGYuanBn.jpg" alt="Logo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
      </Link>
      <Link to="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '10px' }}>
        Gallery
      </Link>
      <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>
        About/ Contact
      </Link>
    </nav>
  );
};

export default NavBar;
