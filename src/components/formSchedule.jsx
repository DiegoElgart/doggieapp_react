import React, { Component } from "react";
import dogService from "../services/dogService";
import visitService from "../services/visitService";
import { toast } from "react-toastify";

export class FormSchedule extends Component {
  state = {
    dogs: [],
    visit: {
      day: null,
      dogId: null,
      startAt: null,
      endAt: null,
    },
    errors: {},
  };
  async componentDidMount() {
    const { data } = await dogService.getDog();
    if (data.length > 0) {
      const visit = { dogId: data[0].dogId };

      this.setState({ dogs: data, visit: visit });
    }
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { visit } = this.state;
    visit.parkId = this.props.match.params.id;
    try {
      await visitService.addVisit(visit);
      toast("Visit Scheduled!");
      this.props.history.replace(`/park/schedule/${visit.parkId}`);
    } catch (ex) {
      if (ex.response && ex.response.status !== 200) {
        this.setState({ errors: ex });
      }
    }
  };

  handleChange = e => {
    const { visit } = this.state;
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      visit: {
        ...visit,
        [name]: value,
      },
    });
  };

  render() {
    const { dogs } = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group col-3'>
            <label>Choose your Dog!</label>
            <select
              className='form-control'
              name='dogId'
              onChange={this.handleChange}>
              {dogs.length > 0 &&
                dogs.map(dog => (
                  <option
                    key={dog.dogId}
                    dog={dog}
                    label={dog.dogName}
                    value={dog.dogId}
                  />
                ))}
            </select>
          </div>
          <div className='form-group col-3'>
            <label className='m-3'>Day: </label>
            <input
              type='date'
              onChange={e => this.handleChange(e)}
              name='day'
              value={this.state.visit.day}
              required
            />
          </div>
          <div className='form-group col-3'>
            <label className='m-3'>From: </label>
            <input
              type='time'
              onChange={e => this.handleChange(e)}
              name='startAt'
              value={this.state.visit.startAt}
              required
            />
          </div>
          <div className='form-group col-3'>
            <label className='m-3'>Until: </label>
            <input
              type='time'
              onChange={e => this.handleChange(e)}
              name='endAt'
              value={this.state.visit.endAt}
            />
          </div>

          <button className='btn btn-info'>Add visit</button>
        </form>
      </div>
    );
  }
}
export default FormSchedule;
