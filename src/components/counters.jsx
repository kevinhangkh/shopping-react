import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;

    return (
      <div>
        <button className="btn btn-secondary m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // We can just pass counter object which contains all the properties we want such as value and id
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete} //Passing the delete event to parent because the state is in parent component
          />
        ))}
      </div>
    );
  }
}

export default Counters;
