import React, { Component } from "react";
import dogService from "../services/dogService";

export class FormSchedule extends Component {
  state = {
    dogs: [],
  };

  async componentDidMount() {
    const { data } = await dogService.getDog();
    if (data.length > 0) this.setState({ dogs: data });
  }
  handleChange = e => {
    this.setState({
      guestId: e.target.value,
    });
  };
  render() {
    const { dogs } = this.state;
    return (
      <div className='container m-3'>
        <div className='row'>
          <div className='col-12'>
            <form action=''>
              <label>Select your Doggie</label>
              <select>
                {dogs.length > 0 &&
                  dogs.map(dog => (
                    <option
                      key={dog.dogId}
                      dog={dog}
                      value={dog.dogId}
                      label={dog.dogName}
                    />
                  ))}
              </select>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSchedule;
