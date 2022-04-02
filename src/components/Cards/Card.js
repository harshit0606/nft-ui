import React from 'react'
import {BiHeart} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";
import "./card.css";
import img1 from "../../Assets/Banner1.jpg";
function Card(props) {
  return (
    <div className='card'>
        <div className='card_img'>
            <img src={props.img}/>
            <div className='heart_div'>
            <BiHeart/>
            </div>
            <div className='card_text'>
            <h3>{props.title}</h3>
            <h6>{props.time}</h6>
            <ul>
            <li><p>{props.venue}</p></li>
            <li><p>Starts at {props.price}</p></li>
            </ul>
            <h4>{props.name}</h4>
            <h4><BsFillPersonFill style={{fontSize:"22px"}}/>&nbsp;&nbsp;{props.followers} followers</h4>
            </div>
        </div>
    </div>
  )
}

export default Card