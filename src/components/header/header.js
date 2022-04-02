import React from "react";
import "./header.css";
import Logo from "../../Assets/CC.png";
import Arrow from "../../Assets/Arrow.png";
import {Link} from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header_1">
      <Link to="/"><h1>HOME</h1></Link>
        <Link to="/about"><h1>ABOUT US</h1></Link>
        <a href="/#events"><h1>EVENTS</h1></a>
      </div>
      <div className="header_2">
      <Link to="/"><img src={Logo}/></Link>
      </div>
      <div className="header_3">
        <Link to="contactus"><h1>CONTACT US</h1></Link>
        <button className="mint_button"><img src={Arrow}/>MINT TICKET</button>
      </div>
    </div>
  );
}

export default Header;