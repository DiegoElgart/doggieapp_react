import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <PageHeader titleText='About Doggie App' />

        <div className='row'>
          <div className='col-12'>
            <p>
              Aca tengo que escribir un about sobre mi app para poder tenerla
              mas pro como corresponde.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
