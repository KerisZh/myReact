import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "来自父组件的值",
    };
  }

  render() {
    return (
      <div
        style={{
          width: "200px",
          height: "130px",
          border: "solid",
          margin: "30px auto",
        }}
      >
        父组件
        <Child txt={this.state.msg} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "solid",
        }}
      >
        子组件
        <p>{this.props.txt}</p>
      </div>
    );
  }
}

export default Parent;
