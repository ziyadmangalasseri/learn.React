import { LOGO_URL } from "../utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameRecat] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  // console.log("header  render");
  const onlineStatus = useOnlineStatus();
  const cartItmes = useSelector((store) => store.cart.items);
  console.log(cartItmes);

  return (
    <div className="p-2">
      <div className="flex p-4 justify-between border border-solid border-black ">
        <div className="logo w-[8%]">
          <img className="" src={LOGO_URL} />
        </div>
        <div className="w-[70%] flex items-center">
          <ul className="w-[100%] flex gap-5">
            <li className="w-[15%]">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="w-[15%]">
              <Link to="/">
                <button className="rounded-md w-[100%] bg-yellow-300">
                  Home
                </button>
              </Link>
            </li>
            <li className="w-[15%]">
              <Link to="/about">
                <button className="rounded-md w-[100%] bg-yellow-300">
                  About
                </button>
              </Link>
            </li>
            <li className="w-[15%]">
              <Link to="/contact">
                <button className="rounded-md w-[100%] bg-yellow-300">
                  Contact
                </button>
              </Link>
            </li>
            <li className="w-[15%]">
              <Link to="/cart">
                <button className="rounded-md w-[100%] bg-yellow-300">
                  cart - ({cartItmes.length})
                </button>
              </Link>
            </li>
            <li className="w-[15%]">
              <Link to="/grocery">
                <button className="rounded-md w-[100%] bg-yellow-300">
                  Grocery
                </button>
              </Link>
            </li>
            <li className="w-[15%]">
              <button
                className="rounded-md w-[100%] bg-yellow-300"
                onClick={() => {
                  btnNameReact == "login"
                    ? setBtnNameRecat("logout")
                    : setBtnNameRecat("login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li className="w-[15%]">User : {loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
