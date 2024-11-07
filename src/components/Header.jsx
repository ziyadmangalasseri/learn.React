import {LOGO_URL} from "../utils/contants";

const Header = () => {
    return (
      <div className="header">
        <div className="log">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;