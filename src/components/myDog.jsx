import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import dogService from "../services/dogService";
import DogCard from "./dogCard";
import { NavLink } from "react-router-dom";

class MyDog extends Component {
  state = {
    dogs: [],
  };

  async componentDidMount() {
    const { data } = await dogService.getDog();
    if (data.length > 0) this.setState({ dogs: data });
  }
  render() {
    const { dogs } = this.state;
    return (
      <div className='container'>
        <PageHeader titleText='My Dog Page' />
        <div className='row'>
          <div className='col-12'>
            <p>Your doggie</p>
            <br />
            <NavLink to='/add/dog'>Add another Doggie</NavLink>
          </div>
        </div>
        <div className='row'>
          {dogs.length > 0 &&
            dogs.map(dog => <DogCard key={dog.dogId} dog={dog} />)}
        </div>
      </div>
    );
  }
}

export default MyDog;
