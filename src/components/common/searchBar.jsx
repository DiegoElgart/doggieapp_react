import React from "react";

const SearchBox = props => {
  return (
    <input
      type='search'
      className='form-control col-4'
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
