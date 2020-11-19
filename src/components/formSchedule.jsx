import React, { Component } from "react";
import dogService from "../services/dogService";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class FormSchedule extends Component {
  state = {
    dogs: {},
    visit: {},
    date: new Date(),
  };
  async componentDidMount() {
    const { data } = await dogService.getDog();
    if (data.length > 0) this.setState({ dogs: data });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { dogs, date } = this.state;
    console.log(dogs);
    let newVisit = dogs + date;
    console.log(newVisit);
  };
  handleDogChange = dog => {
    this.setState({ dogs: dog.target.value });
    console.log(dog.target.value);
  };
  handleChange = date => {
    console.log(date);
    this.setState({ date: date });
  };

  render() {
    const { dogs, date } = this.state;

    return (
      <div className='container m-3 ='>
        <div className='row'>
          <div className='form-group'>
            <form onSubmit={this.handleSubmit}>
              <label>Select your Doggie: </label>
              <select onChange={this.handleDogChange} value={dogs}>
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
              <br />
              <div className='row'>
                <div className='col-5 mt-3'>
                  <DatePicker
                    selected={date}
                    onChange={this.handleChange}
                    timeInputLabel='Time:'
                    dateFormat='dd/MM/yyyy'
                  />
                  <br />
                  <label>From :</label>
                  <DatePicker
                    selected={date}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeCaption='Time'
                    dateFormat='h:mm aa'
                  />
                  <label>Until :</label>
                  <DatePicker
                    selected={date}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeCaption='Time'
                    dateFormat='h:mm aa'
                  />
                </div>
              </div>
              <div className='form-group'>
                <button className='btn btn-info badge-pill m-2'>
                  Add Visit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSchedule;
