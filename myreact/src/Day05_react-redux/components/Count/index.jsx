import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };

  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };

  render() {
    return (
      <div>
        <h3>当前求和为：{this.props.count}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
      </div>
    );
  }
}
