import React from "react";
import Nft from "../../Assets/nftmyticket.png";
import SolanaLogo from "../../Assets/solanaLogo.png";
import Logo from "../../Assets/CC.png";
import SolanaMark from "../../Assets/solanaLogoMark.png";
import Card from "../Cards/Card";
import img1 from "../../Assets/Banner1.jpg";
import img2 from "../../Assets/Banner1.jpg"
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const Data = [
    {
      title: "Mega Spanish Party | Glow Party",
      image:img1,
      time: "Today at 10:00 PM",
      venue: "Scala, London",
      price: "£ 5.98",
      name: "Mega Spanish Party",
      followers: "314",
      id:"0"
    },
    {
      title: "Mega Spanish Party | Glow Party",
      image: img2,
      time: "Today at 10:00 PM",
      venue: "Scala, London",
      price: "£ 5.98",
      name: "Mega Spanish Party",
      followers: "314",
      id:"1",
    },
    {
      title: "Mega Spanish Party | Glow Party",
      image: img1,
      time: "Today at 10:00 PM",
      venue: "Scala, London",
      price: "£ 5.98",
      name: "Mega Spanish Party",
      followers: "314",
      id:"2"
    },
    {
      title: "Mega Spanish Party | Glow Party",
      image: img1,
      time: "Today at 10:00 PM",
      venue: "Scala, London",
      price: "£ 5.98",
      name: "Mega Spanish Party",
      followers: "314",
      id:"3"
    },
  ];

  return (
    <div className="home">
      <div className="banner">
        <div className="banner_text">
          <p> Welcome to</p>
          <h1>CryptoClub</h1>
          <h2>E V E N T S</h2>
          <h6>Connect in real life</h6>
        </div>
        <div className="powered_by">
          <p>Powered by</p>
          <img src={SolanaLogo} />
          <p>&</p>
          <img className="mynft" src={Nft} />
        </div>
      </div>
      <div className="learn_more">
        <p>
          The <span> #1st IRL crypto events company</span> where you can
          connect, learn, socialise and party with like minded people. Access
          our events by minting an NFT ticket on our platform.{" "}
        </p>
        <button className="learnMore_btn">Learn More</button>
        <div className="learnMore_logos">
          <img src={Logo} />
          <img src={SolanaMark} />
        </div>
        <h3>Mint an NFT Ticket pass </h3>
        <p>
          Pay for merchandise, drinks and food at our events using Solana Pay
        </p>
      </div>
      <div id="events" className="upcoming">
        <h1>Upcoming Events</h1>
        <div className="cards_div">
          {Data.map((data, index) => {
            return (
              <Link to={`/event/${index}`}>
                <Card
                  img={data.image}
                  title={data.title}
                  time={data.time}
                  venue={data.venue}
                  price={data.price}
                  name={data.name}
                  followers={data.followers}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="connect">
        <h3>Connect your wallet to Connect in reality</h3>
        <p>
          CryptoClub Events is bringing people from the crypto space together to
          enjoy an “in real life” experience. With our unique NFT ticketing
          platform, patrons can mint their NFT ticket pass on our website in
          order to gain access to our events. Minting/Purchasing an NFT Ticket
          pass can be done in two ways:
        </p>
        <h3>Step 1</h3>
        <p>
          Mint a ticket by using a recognised Solana Wallet such as Phantom or
          Slope.
        </p>
        <h3>Step 2</h3>
        <p>
          Mint a ticket using your credit/debit card. We have partnered with
          Crossmint to provide a simple way for users who do not yet have a
          Solana Wallet to mint. For more info on this option, please refer to
          our <Link to="/faq">FAQ Page.</Link>
        </p>
        <button className="learnMore_btn">Mint Ticket</button>
      </div>
    </div>
  );
}

export default Home;
