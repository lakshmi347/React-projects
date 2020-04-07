import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  onIncrement = (counterId) => {
    const newCounters = this.state.counters.map((counter) => {
      if (counter.id == counterId) {
        return { ...counter, value: counter.value + 1 };
      } else {
        return counter;
      }
    });
    this.setState({ counters: newCounters });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.map((counter) => {
      if (counter.id == counterId) {
        return { ...counter, value: 0 };
      } else {
        return counter;
      }
    });
    this.setState({ counters: newCounters });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
