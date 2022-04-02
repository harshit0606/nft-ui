import React from "react";
import "./header.css";
import Logo from "../../Assets/CC.png";
import Arrow from "../../Assets/Arrow.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const navigate=useNavigate();
  
  const handleClick=()=>{
    const menu=document.querySelector(".header_menu");
    console.log(menu);
    if(menu){
      menu.classList.toggle('active');
    }
  }

  const handleLinkClick=(e, path)=>{
    e.preventDefault();
 
     if (path === "/") {
       handleClick();
       navigate(path);
     }
     if (path === "/about") {
      handleClick();
      navigate(path);
    }
     if (path === "/#events") {
      handleClick();
        navigate(path);
     }
     if (path === "/contactus") {
      handleClick();
      navigate(path);
   }
  }
  return (
    <div>
      <div className="header">
        <div className="header_1">
          <Link to="/">
            <h1>HOME</h1>
          </Link>
          <Link to="/about">
            <h1>ABOUT US</h1>
          </Link>
          <a href="/#events">
            <h1>EVENTS</h1>
          </a>
        </div>
        <div className="header_2">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="header_3">
          <Link to="/contactus">
            <h1>CONTACT US</h1>
          </Link>
          <button className="mint_button">
            <img src={Arrow} />
            MINT TICKET
          </button>
        </div>
      </div>
      <div className="header_phone">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <GiHamburgerMenu onClick={handleClick} style={{ fontSize: "25px" }} />
        <div  className="header_menu">
          <GiHamburgerMenu className="close" onClick={handleClick} style={{ fontSize: "25px" }} />
          <div className="menu">
          <hr></hr>
            
              <h1 onClick={(e)=>{handleLinkClick(e,"/")}}>HOME</h1>
            
            <hr></hr>
            
              <h1 onClick={(e)=>{handleLinkClick(e,"/about")}}>ABOUT US</h1>
        
            <hr></hr>
          
              <h1 onClick={(e)=>{handleLinkClick(e,"/#events")}}>EVENTS</h1>
      
            <hr></hr>
               <h1 onClick={(e)=>{handleLinkClick(e,"/contactus")}}>CONTACT US</h1>
            <button className="mint_button">
              <img src={Arrow} />
              MINT TICKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
