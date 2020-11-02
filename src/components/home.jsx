import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

export class Home extends Component {
  render() {
    return (
      <div className='container'>
        <PageHeader titleText='Doggie App Home Page' />
        <div className='row'>
          <div className='col-12'>
            <p>This is the HOME page for DOGGIE APP!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
