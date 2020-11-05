import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Logout from "./components/logout";
import DogSignup from "./components/dogSignup";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "./services/userService";
import MyDog from "./components/myDog";
import EditDog from "./components/editDog";
import DeleteDog from "./components/deleteDog";
import Parks from "./components/parks";
import createPark from "./components/createPark";
// import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main style={{ minHeight: 900 }}>
          <Switch>
            <Route path='/parks/add' component={createPark} />
            <Route path='/my-dog/delete/:id' component={DeleteDog} />
            <Route path='/my-dog/edit/:id' component={EditDog} />
            <Route path='/parks' component={Parks} />
            <Route path='/my-dog' component={MyDog} />
            <Route path='/add/dog' component={DogSignup} />
            <Route path='/logout' component={Logout} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/about' component={About} />
            <Route path='/' exact component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
