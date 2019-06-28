import React, { Component } from "react";

class InputBox extends Component {
  state = {
    inputBox: ""
  };

  OnChangeHandler = event => {
    this.setState({ inputBox: event.target.value });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          value={this.state.inputBox}
          onChange={this.OnChangeHandler}
          type="text"
          class="form-control"
          placeholder="Enter task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => {
              this.props.onAddHandler(this.state.inputBox);
              this.setState({ inputBox: "" });
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default InputBox;
