import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameRecat] = useState("Login");
  console.log("header  render");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="p-2">
      <div className="flex justify-between border border-solid border-black ">
        <div className="log">
          <img className="w-[10%]" src={LOGO_URL} />
        </div>
        <div className="w-[50%] flex items-center">
          <ul className="flex p-4 m-4 gap-5">
            <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/about">About</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/contact">Contact</Link>
              </button>
            </li>
            <li>
              <button>cart</button>
            </li>
            <li>
              <button>
                <Link to="/grocery">Grocery</Link>
              </button>
            </li>
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
    </div>
  );
};

export default Header;
