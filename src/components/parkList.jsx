import React from "react";

const ParkList = ({ park }) => {
  return (
    <div className=' col-md-6 col-lg-4 mt-3'>
      <div className=' card'>
        <div className='card-body'>
          <h5 className='card-title'>Name: {park.parkName}</h5>
          <hr />
          <p className='card-title'>Address: {park.parkAddress}</p>
          <p>Visit (Poner Link q me lleve a lista de visitas)</p>
        </div>
      </div>
    </div>
  );
};
export default ParkList;
