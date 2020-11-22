import React, { Component } from "react";
import dogService from "../services/dogService";

export class FormSchedule extends Component {
  state = {
    dogs: [],
    visit: {
      dogId: "",
      startAt: new Date(),
      endAt: new Date(),
    },
  };
  async componentDidMount() {
    const { data } = await dogService.getDog();
    if (data.length > 0) this.setState({ dogs: data });
  }
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <div className='form-group'>
          <label>Choose your Dog!</label>
          <select className='form-control'>
            option
          </select>
        </div>
        <div className='form-group'>
          <label className='m-3'>From: </label>
          <input type='date' />
        </div>
      </form>
    );
  }
}
export default FormSchedule;
