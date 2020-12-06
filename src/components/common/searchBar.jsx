import React from "react";

const SearchBox = props => {
  return (
    <input
      type='search'
      className='form-control col-6'
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
