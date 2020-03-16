import React, { Fragment } from "react";
import DateSelector from "./components/DateSelector";
import DifferenceOfDays from "./components/DifferenceOfDays";
import LeapYear from "./components/LeapYear";
import Event from "./components/Event";
import NumberOfMondays from "./components/NumberOfMondays";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="row app">
        <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
          <div className="panel date-selector-panel">
            <div className="panel-body">
              <DateSelector />
            </div>
          </div>
          <ul className="list-group">
            {this.props.difference_of_days && (
              <Fragment>
                <DifferenceOfDays />
                <LeapYear />
                <NumberOfMondays />
                <Event />
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    difference_of_days: state.appReducer.difference_of_days
  }),
  {}
)(App);
