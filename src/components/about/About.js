import React from 'react'
import "./about.css";
import {Link} from "react-router-dom";
function About() {
  return (
    <div>
    <div className='banner'>
        <h1 className='banner_h1'>About Us</h1>
    </div>
    <div className='learn_more'>
    <p>CryptoClub Events is the #1st “in real life” crypto exclusive, events company where fellow 
    cryptonians can connect, learn, socialise and party with each other. Our vision is to bring 
    people together who are in the space as well as people looking to get into it.</p>
    <p>We have developed a unique NFT ticketing platform where patrons can mint their NFT 
    ticket passes on our website in order to gain access to our events. For people with no 
    Solana wallets, we have integrated an option where you can mint your pass using your 
    debit card, credit card, Apple Pay and Google Pay. </p>
    <p>Let&#x27;s bring a decentralized experience to a centralised environment</p>
    <p>For more info, please visit our <Link to="/faq">FAQ Page.</Link></p>
    <button className='learnMore_btn'>Mint Ticket</button>
    </div>
    </div>
  )
}

export default About