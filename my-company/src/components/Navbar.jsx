import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#eee',          // required
    display: 'flex',                  // required
    justifyContent: 'space-between', // required
    padding: '10px'
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/services" style={{ marginRight: '10px' }}>Services</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;