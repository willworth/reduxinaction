import React, { Component } from "react";
import { connect } from "react-redux";
import TasksPage from "./components/TasksPage";

class App extends Component {
  render() {
    return (
      <div className="maincontent">
        <TasksPage tasks={this.props.tasks} />
      </div>
    );
  }
}

// The state argument is the entire contents of the Redux store,
// specifically the result of calling getState on the store instance.

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

// The return value of mapStateToProps is passed into the App
// component as props, which is why render can reference
// this.props.tasks.

export default connect(mapStateToProps)(App);
