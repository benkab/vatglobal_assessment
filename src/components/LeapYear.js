import React, { Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";

class LeapYear extends React.Component {
  state = {
    startDateIsFromALeapYear: null,
    endDateIsFromALeapYear: null
  };

  componentDidMount = () => {
    this.leapYearCheck();
  };

  UNSAFE_componentWillUpdate(nextProps) {
    var self = this;
    if (this.props.date_range !== nextProps.date_range) {
      self.leapYearCheck();
    }
  }

  leapYearCheck = async () => {
    let startDate = await this.props.date_range[0];
    let startYear = moment(startDate).format("YYYY");
    let startYearCheck = await this.isLeapYear(startYear);

    let endDate = await this.props.date_range[1];
    let endYear = moment(endDate).format("YYYY");
    let endYearCheck = await this.isLeapYear(endYear);

    this.setState({
      startDateIsFromALeapYear: startYearCheck,
      endDateIsFromALeapYear: endYearCheck
    });
  };

  refractorDate = date => {
    return moment(date).format("dddd[,] MMMM Do YYYY");
  };

  isLeapYear = year => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };

  render() {
    return (
      <li className="list-group-item">
        {this.state.startDateIsFromALeapYear === true &&
          this.state.endDateIsFromALeapYear === false && (
            <Fragment>
              Only The start date{" "}
              <span>{this.refractorDate(this.props.date_range[0])}</span> is a
              part of a leap year
            </Fragment>
          )}
        {this.state.startDateIsFromALeapYear === false &&
          this.state.endDateIsFromALeapYear === true && (
            <Fragment>
              Only The end date{" "}
              <span>{this.refractorDate(this.props.date_range[1])}</span> is a
              part of a leap year
            </Fragment>
          )}
        {this.state.startDateIsFromALeapYear === true &&
          this.state.endDateIsFromALeapYear === true && (
            <Fragment>
              Both The start date{" "}
              <span>{this.refractorDate(this.props.date_range[0])}</span> and
              The end date{" "}
              <span>{this.refractorDate(this.props.date_range[1])}</span> are
              part of a leap year
            </Fragment>
          )}
        {this.state.startDateIsFromALeapYear === false &&
          this.state.endDateIsFromALeapYear === false && (
            <Fragment>
              Neither The start date{" "}
              <span>{this.refractorDate(this.props.date_range[0])}</span> nor
              The end date{" "}
              <span>{this.refractorDate(this.props.date_range[1])}</span> are
              part of a leap year
            </Fragment>
          )}
      </li>
    );
  }
}

export default connect(
  state => ({
    date_range: state.appReducer.date_range
  }),
  {}
)(LeapYear);
