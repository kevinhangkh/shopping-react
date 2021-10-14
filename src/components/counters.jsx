import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-secondary m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // We can just pass counter object which contains all the properties we want such as value and id
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete} //Handling the delete event here because the state is in this component
          />
        ))}
      </div>
    );
  }
}

export default Counters;
