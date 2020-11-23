import React from "react";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import { apiUrl } from "../config.json";
import http from "../services/httpService";

export class createPark extends Form {
  state = {
    data: {
      parkName: "",
      parkAddress: "",
    },
    errors: {},
  };
  schema = {
    parkName: Joi.string().min(2).max(255).required().label("Park Name"),
    parkAddress: Joi.string().min(2).max(255).required().label("Park Address"),
  };

  doSubmit = async () => {
    const { data } = this.state;

    try {
      await http.post(`${apiUrl}/park/add`, data);
      toast("A new Park has been added!");
      this.props.history.replace("/parks");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: console.error });
        toast("Park already registered");
        this.props.history.replace("/parks");
      }
    }
  };

  handleCancel = () => {
    this.props.history.push("/parks");
  };
  render() {
    return (
      <div className='container'>
        <PageHeader titleText='Park Form' />
        <div className='row'>
          <div className='col-12'>
            <p>Add a Park to the list!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              {this.renderInput("parkName", " Park Name")}
              {this.renderInput("parkAddress", " Park Address")}
              {this.renderButton("Add Park")}
              <button
                className=' btn btn-danger m-3'
                onClick={this.handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default createPark;
