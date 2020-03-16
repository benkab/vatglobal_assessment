import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Pluralize from "react-pluralize";

class DifferenceOfDays extends React.Component {
  refractorDate = date => {
    return moment(date).format("dddd[,] MMMM Do YYYY");
  };

  render() {
    return (
      <li className="list-group-item">
        There is{" "}
        <span>
          <Pluralize singular={"day"} count={this.props.difference_of_days} />
        </span>{" "}
        between <span>{this.refractorDate(this.props.date_range[0])}</span> and{" "}
        <span>{this.refractorDate(this.props.date_range[1])}</span>
      </li>
    );
  }
}

export default connect(
  state => ({
    difference_of_days: state.appReducer.difference_of_days,
    date_range: state.appReducer.date_range
  }),
  {}
)(DifferenceOfDays);
