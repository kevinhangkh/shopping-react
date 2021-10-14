import "./App.css";
import NavBar from "./components/navbar";
import React from "react";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 3 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log(this.state.counters);
  };

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters]; //Cloning the array of counters from state
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //Cloning the counter given in the event
    counters[index].value++;

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("on delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    this.setState({ counters }); //Works because both properties have the same name
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
