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
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  d-flex justify-content-center'
                  to='/about'>
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

              <li className='nav-item d-flex justify-content-center'>
                {user && (
                  <NavLink to='/dogs/search' className='btn btn-success '>
                    Search for Doggies!
                  </NavLink>
                )}
              </li>

              {!user && (
                <React.Fragment>
                  <li className='nav-item  d-flex justify-content-center'>
                    <NavLink className='nav-link' to='/signin'>
                      Signin
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link  d-flex justify-content-center'
                      to='/signup'>
                      Signup
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <p className=' d-flex justify-content-center m-2'>
                    Hi, {userName.data}!
                  </p>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link  d-flex justify-content-center'
                      to='/logout'>
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
