import { Component } from "react";
import dogService from "../services/dogService";

class DeleteDog extends Component {
  async componentDidMount() {
    await dogService.deleteDog(this.props.match.params.id);
    this.props.history.replace("/my-dog");
  }
  render() {
    return null;
  }
}

export default DeleteDog;
