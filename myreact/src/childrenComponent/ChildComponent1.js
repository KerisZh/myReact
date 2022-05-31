import React from "react";

class ChildComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "solid",
          margin: "30px auto",
        }}
      >
        <h4>第一个子组件（Class）</h4>
        <p>点击了 {this.state.count} 次</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          加1
        </button>
      </div>
    );
  }
}

export default ChildComponent1;
