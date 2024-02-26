// Navbar.js
import '../../assets/Css/admin.css';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/admin/addplan" className="nav-link">Add plans</Link>
         
      </li>
      {/* <li className="nav-item">
        <Link to="/user/addplan" className="nav-link">view Plans</Link>
      </li> */}
      <li className="nav-item">
        <Link to="/admin/" className="nav-link"> Add addon</Link>
      </li>
      {/* <li className="nav-item">
        <Link tp="/user/addplan" className="nav-link">View addon</Link>
      </li> */}
      <li className="nav-item">
        <Link to="/admin/rechargehistory" className="nav-link">History</Link>
      </li>
    </ul>
  </nav>
  );
}

export default AdminNavbar;
