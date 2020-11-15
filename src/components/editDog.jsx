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
      age: 0,
      weight: 0,
      Sex: 0,
      neutered: 0,
    },
    errors: {},
  };

  schema = {
    dogName: Joi.string().min(2).max(255).required().label("Dog name"),
    Sex: Joi.object({
      label: Joi.string(),
      value: Joi.number().integer(),
    }),
    age: Joi.number().integer().label("Age"),
    weight: Joi.number().integer().label("Weight"),
    neutered: Joi.object({
      label: Joi.string(),
      value: Joi.number().integer(),
    }),
  };
  doSubmit = async () => {
    const { data } = this.state;
    data.dogId = this.props.match.params.id;
    const editedDog = { ...data };
    console.log(editedDog);
    await dogService.editDog(editedDog);
    toast("Doggie updated!");
    this.props.history.replace("/my-dog");
  };
  mapToViewModel(dog) {
    return {
      dogName: dog.dogName,
      Sex: sexOptions.find(option => option.value === dog.sex),
      age: dog.age,
      weight: dog.weight,
      neutered: neuteredOptions.find(option => option.value === dog.neutered),
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
              <Select
                name='Sex'
                className='form-group'
                options={sexOptions}
                label='Sex'
                onChange={e =>
                  this.handleChange({
                    currentTarget: {
                      name: "Sex",
                      value: e,
                      array: sexOptions,
                    },
                  })
                }
                value={this.state.data.Sex || ""}
              />
              {this.renderInput("age", "Age")}
              {this.renderInput("weight", "Weight")}
              <label>Neutered?</label>
              <Select
                className='form-group'
                options={neuteredOptions}
                placeholder='Select if Neutered'
                label='neutered'
                name='neutered'
                onChange={e =>
                  this.handleChange({
                    currentTarget: {
                      name: "neutered",
                      value: e,
                      array: neuteredOptions,
                    },
                  })
                }
                value={this.state.data.neutered || ""}
              />
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
