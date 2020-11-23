import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import dogService from "../services/dogService";
import DogsCards from "./dogsCards";
import SearchBox from "./common/searchBar";

class Search extends Component {
  state = {
    dogs: [],
    searchField: "",
  };

  async componentDidMount() {
    const { data } = await dogService.getAllDogs();
    if (data.length > 0) this.setState({ dogs: data });
  }
  render() {
    const { dogs, searchField } = this.state;
    const filteredDogs = dogs.filter(dog => {
      return (
        dog.dogName.toLowerCase().indexOf(searchField.toLowerCase()) !== -1
      );
    });
    return (
      <div className='container'>
        <PageHeader titleText='Doggie Search ' />
        <div className='row'>
          <div className='col-12'>
            <p>List of all doggies!</p>
            <br />
            <SearchBox
              placeholder='Search for a Doggie!'
              handleChange={e => this.setState({ searchField: e.target.value })}
            />
          </div>
        </div>
        <div className='row'>
          {filteredDogs.map(dog => (
            <DogsCards key={dog.dogId} dog={dog} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
