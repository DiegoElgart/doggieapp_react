import React, { Component } from "react";
import parkService from "../services/parkService";
import PageHeader from "./common/pageHeader";
import Table from "./common/table";

class ParkList extends Component {
  state = {
    visits: [],
    errors: {},
  };

  async componentDidMount() {
    const parkId = this.props.match.params.id;
    const { data } = await parkService.getAllVisitsForPark(parkId);
    if (data.length > 0) this.setState({ visits: data });
  }
  render() {
    const { visits } = this.state;
    return (
      <div className='container'>
        <PageHeader titleText='Schedule a visit' />
        <h5>Nombre parque: {visits.parkId}</h5>
        <div className='col-6'>
          <div className='row'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>From</th>
                  <th>Until</th>
                  <th>Dogs</th>
                </tr>
              </thead>
              <tbody>
                {visits.length > 0 &&
                  visits.map(visit => (
                    <Table key={visit.visitId} visit={visit} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ParkList;
