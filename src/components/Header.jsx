import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameRecat] = useState("Login");
  console.log("header  render");

  return (
    <div className="header">
      <div className="log">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>cart</li>
          <li>
            <button
              onClick={() => {
                btnNameReact == "login"
                  ? setBtnNameRecat("logout")
                  : setBtnNameRecat("login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
