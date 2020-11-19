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
import userService, { getUserData } from "./services/userService";
import MyDog from "./components/myDog";
import EditDog from "./components/editDog";
import DeleteDog from "./components/deleteDog";
import Parks from "./components/parks";
import createPark from "./components/createPark";
import ParkList from "./components/parkList";
import DoggieCalendar from "./components/DoggieCalendar";
import FormSchedule from "./components/formSchedule";

class App extends Component {
  state = {};

  async componentDidMount() {
    const user = userService.getCurrentUser();
    if (user) {
      const userName = await getUserData(user.id);
      this.setState({ user, userName });
    }
  }

  render() {
    const { user } = this.state;
    const { userName } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <header>
          <Navbar user={user} userName={userName} />
        </header>
        <main style={{ minHeight: 900 }}>
          <Switch>
            <Route
              path='/park/calendar/add'
              component={FormSchedule}
              user={user}
            />
            <Route path='/park/calendar/:id' component={DoggieCalendar} />
            <Route path='/park/schedule/:id' component={ParkList} />
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
