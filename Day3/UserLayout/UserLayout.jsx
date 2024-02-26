import propTypes from "prop-types";
import Navbar from "../Navbar/Navbar";  
import { Footer } from "../Footer/Footer";   

const UserLayout = ({ children }) => {
  return (
    <div className="user_container">
      <header >
       <Navbar/>
      </header>
      <main>{children}</main>
       <footer>
        <Footer/>
       </footer>
      </div>
      );
    };

UserLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default UserLayout;