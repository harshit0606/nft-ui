import React from 'react'
import {BiHeart} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";
import "./card.css";
import img1 from "../../Assets/Banner1.jpg";
function Card(props) {
  return (
    <div className='card'>
        <div className='card_img'>
            <img src={img1}/>
            <div className='heart_div'>
            <BiHeart/>
            </div>
            <div className='card_text'>
            <h3>{props.title}</h3>
            <h6>{props.time}</h6>
            <p>{props.venue}</p>
            <p>Starts at {props.price}</p>
            <h4>{props.name}</h4>
            <h4><BsFillPersonFill/>{props.followers} followers</h4>
            </div>
        </div>
    </div>
  )
}

export default Card