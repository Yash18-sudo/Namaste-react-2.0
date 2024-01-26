import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const d = new Date();
  let [btnName, setBtnName] = useState("Login");
  // useEffect(() =>{console.table("Header rendered " + d.getTime() )});
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-xl ">
      <div className="logo-container ml-20">
        <img className="w-20 m-2 ml-10" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="px-4"
          >
            {btnName}
          </button>
          <h1>{loggedInUser}</h1>
        </ul>
      </div>
    </div>
  );
};

export default Header;
