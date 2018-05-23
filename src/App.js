import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import DatePickerComp from "./DatePicker";
import DatePicker from "material-ui/DatePicker";

Date.prototype.getMonthWeek = function() {
  var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
  return Math.ceil((this.getDate() + firstDay) / 7);
};

// let weekOfMonth = newDate.getMonthWeek();
// let dayOfWeek = newDate.getDay();
// console.log(dayOfWeek);
// console.log(weekOfMonth);

class App extends Component {
  state = {
    startingDate: "",
    endingDate: "",
    destination: "",
    origin: ""
  };
  updateStart = val => {
    this.setState({ startingDate: val });
  };
  updateEnd = val => {
    this.setState({ endingDate: val });
  };
  getData = () => {
    let startingMonth = this.state.startingDate;
    let endingMonth = this.state.endingDate;
    let startingweek = this.state.startingDate.getMonthWeek();
    let startingday = this.state.startingDate.getDay() + 1;
    let endingweek = this.state.endingDate.getMonthWeek();
    let endingday = this.state.endingDate.getDay() + 1;
    axios.get(
      `/api/getairplaneflightsandgethotelavailabilities?startingweek=${startingweek}&startingday=${startingday}&endingweek=${endingweek}&endingday=${endingday}&destination=${
        this.state.destination
      }&origin=${
        this.state.origin
      }&startingmonth=${startingMonth}&endingmonth=${endingMonth}`
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          placeholder="destination"
          onChange={e => this.setState({ destination: e.target.value })}
        />
        <input
          placeholder="origin"
          onChange={e => this.setState({ origin: e.target.value })}
        />
        <div className="date-holder">
          <DatePickerComp update={this.updateStart} />
          <DatePickerComp update={this.updateEnd} />
        </div>
        <button onClick={this.getData}>GIVE ME FLIGHT AND HOTEL DATA</button>
      </div>
    );
  }
}

export default App;
