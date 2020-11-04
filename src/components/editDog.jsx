import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import { toast } from "react-toastify";
import Select from "react-select";
import dogService from "../services/dogService";

const sexOptions = [
  { value: 1, label: "Male" },
  { value: 0, label: "Female" },
];
const neuteredOptions = [
  { value: 1, label: "Yes" },
  { value: 0, label: "No" },
];

class EditDog extends Form {
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
    data.dogId = this.props.match.params.id;
    await dogService.editDog(data);
    toast("Doggie updated!");
    this.props.history.replace("/my-dog");
  };
  mapToViewModel(dog) {
    return {
      dogName: dog.dogName,
      sex: dog.sex,
      age: dog.age,
      weight: dog.weight,
      neutered: dog.neutered,
    };
  }
  async componentDidMount() {
    const dogId = this.props.match.params.id;
    const { data } = await dogService.getDogById(dogId);
    this.setState({ data: this.mapToViewModel(data[0]) });
  }

  handleCancel = () => {
    this.props.history.push("/my-dog");
  };

  render() {
    return (
      <div className='container'>
        <PageHeader titleText='Edit Doggie Form' />
        <div className='row'>
          <div className='col-12'>
            <p>Edit your Doggie</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              {this.renderInput("dogName", "Dog Name")}
              <label>Sex</label>
              <Select className='form-group' options={sexOptions} />
              {this.renderInput("age", "Age")}
              {this.renderInput("weight", "Weight")}
              <label>Neutered?</label>
              <Select className='form-group' options={neuteredOptions} />
              {this.renderButton("Update Doggie")}
              <button
                className='btn btn-danger ml-2'
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

export default EditDog;
