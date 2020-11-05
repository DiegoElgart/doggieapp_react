import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import ParkList from "./parkList";
import parkService from "../services/parkService";
import { Link } from "react-router-dom";

export class Parks extends Component {
  state = {
    parks: [],
  };
  async componentDidMount() {
    const { data } = await parkService.getAllParks();
    if (data.length > 0) this.setState({ parks: data });
  }
  render() {
    const { parks } = this.state;
    return (
      <div className='container'>
        <PageHeader titleText='Doggie Parks' />
        <div className='row'>
          <div className='col-12'>
            <p>List of Doggie Parks</p>
            <Link to='/parks/add'>Add a new park...</Link>
          </div>
          <div className='row'>
            {parks.length > 0 &&
              parks.map(park => <ParkList key={park.parkId} park={park} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Parks;
