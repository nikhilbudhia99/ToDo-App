import React, { Component } from "react";

class Counter extends Component {
  //SINGLE SOURCE OF TRUTH
  //   state = {
  //     value: this.props.counter.value
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   handleIncrement = product => {
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("prevProps", prevProps);
  //     console.log("prevState", prevState);
  //     if(prevProps.counter.value !== this.props.counter.value){
  //         //ajax call to server to get new data
  //     }
  //   }
  render() {
    //{this.state.tags.length === 0 && "Please create a new Tag"}
    //{this.renderTags()}
    console.log("counter rendered");
    return (
      <div>
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    var { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  badgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

/**
 * <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>

    
  
 */
