import { LOGO_URL } from "../utils/contants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
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
