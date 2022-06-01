import React from "react";

class Father extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  getData = (msg) => {
    this.setState({
      message: msg,
    });
  };

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
        父组件
        <Son getdata={this.getData} />
        <div>来自子组件的数据：{this.state.message}</div>
      </div>
    );
  }
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleClick = () => {
    this.props.getdata(this.state.inputValue);
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <div
        style={{
          border: "solid",
          margin: "30px auto",
        }}
      >
        子组件
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>发送数据</button>
      </div>
    );
  }
}

export default Father;
