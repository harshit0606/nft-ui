import React,{useState} from 'react'
import {IoCalendarClearOutline,IoLocationOutline} from "react-icons/io5";
import EventData from '../../SingleEventData';
import { useParams } from 'react-router-dom';
import "./singleEvent.css";
function SingleEvent(props) {
  const{index}=useParams();
  console.log(index);
  return (
    <div className='singleEvent_main'>
        <div className='singleEvent1'>
            <div className='singleEvent11'>
            <h1>{EventData[index].name}</h1>
            <h5>Date: {EventData[index].date}</h5>
            <h5>Time: {EventData[index].time}</h5>
            </div>
            <div className='singleEvent12'>
              <img src={EventData[index].image}/>
            </div>
        </div>
        <div className='singleEvent2'>
        <div className='event_date'>
          <div className='calender'>
          <IoCalendarClearOutline />
          </div>
          <div className='singleEvent_data'>
            <h4>{EventData[index].date}</h4>
            <p>{EventData[index].time}-{EventData[index].date}</p>
          </div>
        </div>
        <div className='event_venue'>
          <div className='calender'>
          <IoLocationOutline/>
          </div>
          <div className='singleEvent_data'>
            <h4>{EventData[index].shortAddress}</h4>
            <p>{EventData[index].fullAddress}</p>
          </div>
        </div>
        <div className='ticket_div'>
        <button className='buyTickets_btn'>BUY TICKETS</button>
        </div>
        </div>
        <div className='singleEvent3'>
          <div className='heading_left'>
          <h2>Details</h2><hr></hr>
          </div>
          <div className='event_data'>
          {EventData[index].details.map((d)=>{
            return(
              <p>{d}</p>
            );
          })}
          </div>
        </div>
        <div className='singleEvent4'>
          <div className='heading_left'>
          <h2>Information</h2>
          <hr></hr>
          </div>
          <div className='event_data'>
            <div  className='info'><p>AGE REQUIREMENT</p><p>{EventData[index].information.age}</p></div>
            <hr></hr>
            <div  className='info'><p>PARKING</p><p>{EventData[index].information.parking}</p></div>
            <hr></hr>
            <div  className='info'><p>PROHIBITED ITEMS</p><p>{EventData[index].information.prohibitedItems}</p></div>
            
          </div>
        </div>
    </div>
  )
}

export default SingleEvent;