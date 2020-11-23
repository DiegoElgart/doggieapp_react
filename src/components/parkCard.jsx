import React from "react";
import { Link } from "react-router-dom";

const ParkCard = ({ park }) => {
  return (
    <div className='card m-3'>
      <div className='card-body'>
        <h5 className='card-title'>Name: {park.parkName}</h5>
        <hr />
        <p className='card-title'>Address: {park.parkAddress}</p>
        <Link to={`/park/calendar/${park.parkId}`}>Park Schedule</Link>
      </div>
    </div>
  );
};
export default ParkCard;
