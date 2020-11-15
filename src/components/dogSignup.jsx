import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import Select from "react-select";
import { error } from "jquery";

const sexOptions = [
  { value: 1, label: "Male" },
  { value: 0, label: "Female" },
];
const neuteredOptions = [
  { value: 1, label: "Yes" },
  { value: 0, label: "No" },
];

class DogSignup extends Form {
  state = {
    data: {
      dogName: "",
      sex: 0,
      age: 0,
      weight: 0,
      neutered: 0,
    },

    errors: {},
  };

  schema = {
    dogName: Joi.string().min(2).max(255).required().label("Dog name"),
    sex: Joi.number().integer().label("Sex"),
    age: Joi.number().integer().label("Age"),
    weight: Joi.number().integer().label("Weight"),
    neutered: Joi.number().integer().label("Neutered"),
  };

  
  doSubmit = async () => {
    const { data } = this.state;

    try {
      await http.post(`${apiUrl}/user/dog/add`, data);

      toast("A new Doggie has been added!");
      this.props.history.replace("/my-dog");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: error });
      }
    }
  };

  render() {
    return (
      <div className='container'>
        <PageHeader titleText='Doggie Registration Form' />
        <div className='row'>
          <div className='col-12'>
            <p>Add your Doggie</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} autoComplete='off' method='POST'>
              {this.renderInput("dogName", "Dog Name")}
              <label>Sex</label>
              <Select className='form-group' options={sexOptions} />
              {this.renderInput("age", "Age")}
              {this.renderInput("weight", "Weight")}
              <label>Neutered?</label>
              <Select className='form-group' options={neuteredOptions} />
              {this.renderButton("Add Doggie")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DogSignup;
