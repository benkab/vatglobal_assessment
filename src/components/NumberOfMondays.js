import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Pluralize from "react-pluralize";

class NumberOfMondays extends React.Component {
  refractorDate = date => {
    return moment(date).format("dddd[,] MMMM Do YYYY");
  };

  render() {
    return (
      <li className="list-group-item">
        There is{" "}
        <span>
          <Pluralize singular={"monday"} count={this.props.number_of_mondays} />
        </span>{" "}
        between <span>{this.refractorDate(this.props.date_range[0])}</span> and{" "}
        <span>{this.refractorDate(this.props.date_range[1])}</span>
      </li>
    );
  }
}

export default connect(
  state => ({
    number_of_mondays: state.appReducer.number_of_mondays,
    date_range: state.appReducer.date_range
  }),
  {}
)(NumberOfMondays);
