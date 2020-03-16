import React, { Fragment } from "react";
import { connect } from "react-redux";
import Loader from "./Loader";

class Event extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.isLoadingEvent === false && (
          <div className="row event-container">
            <p>{this.props.event}</p>
          </div>
        )}
        {this.props.isLoadingEvent === true && <Loader />}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isLoadingEvent: state.appReducer.isLoadingEvent,
    event: state.appReducer.event
  }),
  {}
)(Event);
