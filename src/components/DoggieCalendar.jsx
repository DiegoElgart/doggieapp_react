import React, { Component } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import visitService from "../services/visitService";
import "moment/locale/en-il";
import "moment-timezone";
import PageHeader from "./common/pageHeader";

moment.locale();

const localizer = momentLocalizer(moment);

class DoggieCalendar extends Component {
  state = {
    visits: [],
    errors: {},
  };

  async componentDidMount() {
    const parkId = this.props.match.params.id;
    const { data } = await visitService.getVisits(parkId);
    // console.log(data);
    let appointments = data;
    for (let i = 0; i < appointments.length; i++) {
      appointments[i].start = moment(appointments[i].start)
        .subtract(2, "hour")
        .toDate();
      appointments[i].end = moment(appointments[i].end)
        .subtract(2, "hour")
        .toDate();
    }
    this.setState({ visits: appointments });
  }

  render() {
    const { visits } = this.state;

    return (
      <div className='container'>
        <PageHeader titleText='Schedule play time in: ' />
        <div className='row'>
          <div className='col m-5 pt-5'>
            <Calendar
              selectable
              localizer={localizer}
              events={visits}
              titleAccessor='dogs_groupby_hour'
              startAccessor='start'
              endAccessor='end'
              defaultView='day'
              onSelectEvent={visit => alert(visit.dogs_groupby_hour)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DoggieCalendar;
