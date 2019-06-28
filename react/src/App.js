// import React, { Component } from "react";
// import NavBar from "./components/navbar";
// import Counters from "./components/counters";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   constructor() {
//     super();
//     console.log("app-constructor");
//   }

//   componentDidMount() {
//     //here we hit api
//     console.log("app-mounted");
//   }

//   handleIncrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter }; //we are cloning the array using 'spread' operator
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleDelete = counterId => {
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters });
//   };
//   handleReset = () => {
//     const counters = this.state.counters.map(c => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };
//   render() {
//     console.log("rendered");
//     return (
//       <React.Fragment>
//         <NavBar
//           totalCounters={this.state.counters.filter(c => c.value > 0).length}
//         />
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onIncrement={this.handleIncrement}
//             onDelete={this.handleDelete}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import InputBox from "./components/inputbox.jsx";
import Tasks from "./components/tasks.jsx";

class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.getTasksFromDb();
  }

  getTasksFromDb = () => {
    const axios = require("axios");
    axios
      .get("http://localhost:5000/todos/show")
      .then(res => {
        this.setState({ tasks: res.data.todos.reverse() });
      })
      .catch(e => {
        console.log("error happened", e);
      });
    // fetch()
  };

  onAddHandler = newTask => {
    const axios = require("axios");
    axios
      .post("http://localhost:5000/todo/add", {
        text: newTask
      })
      .then(res => {
        // console.log("added to db");
        this.getTasksFromDb();
      })
      .catch(e => {
        console.log("error happened", e);
      });
  };

  onRemoveHandler = taskId => {
    const axios = require("axios");
    axios
      .delete("http://localhost:5000/todo/delete/id", {
        data: {
          _id: taskId
        }
      })
      .then(() => {
        // console.log("deleted");
        this.getTasksFromDb();
      })
      .catch(e => {
        console.log("not deleted", e);
      });
    //console.log(taskId);
  };

  onUpdateHandler = (taskId, status) => {
    const axios = require("axios");
    axios
      .patch("http://localhost:5000/todo/update/id", {
        _id: taskId,
        completed: status
      })
      .then(() => {
        this.getTasksFromDb();
        alert("updated");
      })
      .catch(e => {
        console.log("not updated ", e);
        alert("error");
      });
  };
  render() {
    return (
      <div className="container col-lg-6 offset-3">
        <h1>
          <center>TO DO LIST</center>
        </h1>
        <InputBox onAddHandler={this.onAddHandler} />
        <Tasks
          tasks={this.state.tasks}
          onRemove={this.onRemoveHandler}
          onUpdate={this.onUpdateHandler}
        />
      </div>
    );
  }
}

export default App;
