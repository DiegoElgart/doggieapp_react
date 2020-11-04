import React from "react";
import { Link } from "react-router-dom";

const DogCard = ({ dog }) => {
  let dogSex = "";
  if (dog.sex === 0) {
    dogSex = "Female";
  } else {
    dogSex = "Male";
  }
  let neutered = "";
  if (dog.neutered === 0) {
    neutered = "No";
  } else {
    neutered = "Yes";
  }
  return (
    <div className='col-md-6 col-lg-4 mt-3'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            <b>Name: </b>
            {dog.dogName}
          </h5>
          <hr />
          <p className='card-text'>
            <b>Age: </b>
            {dog.age}
          </p>
          <hr />
          <p>
            <b>Sex: </b>
            {dogSex}
          </p>
          <hr />
          <b>Weight: </b>
          {dog.weight}
          <br />
          <hr />
          <p>
            <b> Neutered: </b>
            {neutered}
          </p>
          <Link to={`/my-dog/edit/${dog.dogId}`}>Edit</Link> |
          <Link className='ml-2' to={`/my-dog/delete/${dog.dogId}`}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
