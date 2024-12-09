import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameRecat] = useState("Login");
  console.log("header  render");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="log">
        <img className="w-[10%]" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>cart</li>
          <li><Link to="/grocery">Grocery</Link></li>
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
