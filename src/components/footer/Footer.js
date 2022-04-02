import React from 'react'
import Logo from "../../Assets/logo.svg";
import Arrow from "../../Assets/Arrow.png";
import {AiOutlineTwitter} from "react-icons/ai";
import { BsInstagram } from 'react-icons/bs';
import {Link} from "react-router-dom"
import "./footer.css";
function Footer() {
  return (<div className='footer_main'>
    <div className='footer'>
        <div className='footer1'>
            <div className='footer_logo'>
                <img src={Logo}/>
            </div>
            <div className='footer_links'>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About Us</p></Link>
                <Link to="/#events"><p>Events</p></Link>
                <Link to="/faq"><p>FAQ's</p></Link>
                <Link to="/contactus"><p>Contant Us</p></Link>
            </div>
        </div>
        <div className='footer2'>
            <div className='footer_icons'>
                <Link to="https://twitter.com/cryptoclubevent" style={{color:"#6357a1"}}><div className='footer_icon'><AiOutlineTwitter/></div></Link>
                <div className='footer_icon'><BsInstagram/></div>
            </div>
            <div className='footer_mint'>
            <button className="mint_button2"><img src={Arrow}/>MINT TICKET</button>
            </div>

        </div>
       
    </div>
    <p className='copyright'>Copyright Crypto Club Events</p>
    </div>
  )
}

export default Footer