import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { connect } from "react-redux";
import appActions from "./../store/actions";
import { loadEventRequest } from "./../helpers/api";
import moment from "moment";

const {
  setDifferenceOfDays,
  setDateRange,
  setIsLoadingEvent,
  setEvent,
  setNumberOfMondays
} = appActions;

class DateSelector extends React.Component {
  state = {
    date: null
  };

  onChange = async date => {
    if (date) {
      let range = [];
      range.push(date[0]);
      range.push(date[1]);
      this.props.setDateRange(range);
      this.getDifferenceOfDays(date[0], date[1]);

      this.loadEvent(moment(date[0]).format("D"), moment(date[0]).format("M"));
      let number_of_mondays = await this.getMondays([1], date[0], date[1]);
      this.props.setNumberOfMondays(number_of_mondays);
    } else {
      this.props.setDateRange([]);
      this.props.setDifferenceOfDays(null);
      this.props.setIsLoadingEvent(null);
      this.props.setEvent(null);
    }
  };

  getDifferenceOfDays = (start, end) => {
    var differenceInTime = end.getTime() - start.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    this.props.setDifferenceOfDays(Math.round(differenceInDays));
  };

  loadEvent = async (day, month) => {
    var self = this;
    this.props.setIsLoadingEvent(true);
    loadEventRequest(day, month)
      .then(res => {
        return res.text();
      })
      .then(data => {
        if (data) {
          self.props.setIsLoadingEvent(false);
          self.props.setEvent(data);
        }
      });
  };

  getMondays = (days, d0, d1) => {
    var ndays = 1 + Math.round((d1 - d0) / (24 * 3600 * 1000));
    var sum = function(a, b) {
      return a + Math.floor((ndays + ((d0.getDay() + 6 - b) % 7)) / 7);
    };
    return days.reduce(sum, 0);
  };

  render() {
    return (
      <div className="row date-selector">
        <label>Select a date range:</label>
        <DateRangePicker
          className="form-control"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default connect(state => ({}), {
  setDifferenceOfDays,
  setDateRange,
  setIsLoadingEvent,
  setEvent,
  setNumberOfMondays
})(DateSelector);
