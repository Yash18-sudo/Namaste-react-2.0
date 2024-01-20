import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const d = new Date();
    let [btnName,setBtnName] = useState("Login");
    useEffect(() =>{console.table("Header rendered " + d.getTime() )});
    const onlineStatus = useOnlineStatus();
    return <div className="header">
        <div className="logo-container">
            <img className="logo"
            src={LOGO_URL}
            />
        </div>
        <div className="nav-items">
            <ul>
               <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/about" >About Us</Link></li>
               <li><Link to="/contact" >Contact Us</Link></li>
               <li>Cart</li>
               <button onClick={()=>{
                btnName == "Login"?setBtnName("Logout"):setBtnName("Login")
            }}
             className="login">{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;