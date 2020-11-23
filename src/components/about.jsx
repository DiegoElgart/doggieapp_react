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
              Doggie App allows you to schedule visits in differents dog parks
              sprad across your city.
            </p>
            <p>
              Check which of your Doggie friends are going to be and where! (and
              also those dogs that don't get along with yours)
            </p>
            <p>
              Add your favorite parks and discovers new ones that you didnt't
              know about them!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
