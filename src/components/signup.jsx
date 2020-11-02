import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import userService from "../services/userService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

class Signup extends Form {
  state = {
    data: { email: "", password: "", firstName: "", lastName: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    firstName: Joi.string().required().min(2).label("First Name"),
    lastName: Joi.string().required().min(2).label("Last Name"),
  };

  doSubmit = async () => {
    const { data } = this.state;

    try {
      await http.post(`${apiUrl}/auth/signup`, data);
      toast("A new account is opened!");
      this.props.history.replace("/add/dog");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: "Email is taken" } });
      }
    }
  };
  render() {
    if (userService.getCurrentUser()) return <Redirect to='/' />;
    return (
      <div className='container'>
        <PageHeader titleText='Signup for Doggie App' />
        <div className='row'>
          <div className='col-12'>
            <p>You can open new account for free!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} autoComplete='off' method='POST'>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("firstName", "First Name")}
              {this.renderInput("lastName", "Last Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
