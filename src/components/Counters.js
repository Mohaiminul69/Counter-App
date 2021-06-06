import React, { Component, Fragment } from "react";
import Counter from "./Counter";

export class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDecrement, onDelete } =
      this.props;
    return (
      <Fragment>
        <button
          onClick={() => this.props.onReset(onReset)}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
