import React, { Component } from "react";
import DatePicker from "material-ui/DatePicker";
import DateRange from "material-ui/svg-icons/action/date-range";

class DatePickerlol extends Component {
  openDatePicker = () => {
    this.refs.dp.openDialog();
  };
  render() {
    return (
      <main>
        <div className="date-icon">
          <DateRange
            onClick={() => {
              this.openDatePicker();
            }}
          />
          <DatePicker
            style={{ marginLeft: "170px" }}
            onChange={(blank, date) => {
              let newDate = new Date(date);
              this.props.update(newDate);
            }}
            underlineStyle={{ borderBottom: "white" }}
            ref="dp"
          />
        </div>
      </main>
    );
  }
}
export default DatePickerlol;
