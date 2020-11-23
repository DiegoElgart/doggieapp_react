import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    const { user, userName } = this.props;

    return (
      <nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Doggie App
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                {user && (
                  <NavLink className='nav-link btn' to='/my-dog'>
                    My Dog
                  </NavLink>
                )}
              </li>
              <li className='nav-item'>
                {user && (
                  <NavLink className='nav-link btn' to='/parks'>
                    Parks & Visits
                  </NavLink>
                )}
              </li>

              <li className='nav-item '>
                {user && (
                  <NavLink to='/dogs/search' className='btn btn-success ml-2'>
                    Search for Doggies!
                  </NavLink>
                )}
              </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
              {!user && (
                <React.Fragment>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/signin'>
                      Signin
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/signup'>
                      Signup
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <p className='m-2'>Hi, {userName.data}!</p>
                  <li className='nav-item'>
                    <NavLink className='nav-item nav-link' to='/logout'>
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
