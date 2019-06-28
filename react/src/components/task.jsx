import React, { Component } from "react";

class Task extends Component {
  state = {
    status: this.props.task.completed
  };

  onChangeStatus = event => {
    this.setState({ status: event.target.value });
  };

  colourHandler = () => {
    if (this.props.task.completed === true) return "lightgreen";
    return "white";
  };
  render() {
    return (
      <div>
        <li style={{ backgroundColor: this.colourHandler() }}>
          <span> {this.props.task.text} </span>
          <select
            className="m-2"
            onChange={this.onChangeStatus}
            value={this.state.status}
          >
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
          <button
            className="m-2"
            onClick={() => {
              this.props.onUpdate(this.props.task._id, this.state.status);
            }}
          >
            Update
          </button>
          <button
            className="m-2"
            onClick={() => {
              this.props.onRemove(this.props.task._id);
            }}
          >
            Remove
          </button>
        </li>
      </div>
    );
  }
}

export default Task;
