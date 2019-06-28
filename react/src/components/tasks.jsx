import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  //   getTask = task => {
  //     return <Task task={task} />;
  //   };
  //   iterateTask = () => {
  //     return this.state.tasks.map(task => {
  //       this.getTask(task);
  //     });
  //   };
  render() {
    //console.log(this.props.tasks);
    return (
      <div>
        <ul>
          {this.props.tasks
            .sort((a, b) => a.completedAt < b.completedAt)
            .map(task => (
              <Task
                key={task._id}
                task={task}
                onRemove={this.props.onRemove}
                onUpdate={this.props.onUpdate}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
