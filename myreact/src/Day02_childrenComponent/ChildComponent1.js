import React from "react";

class ChildComponent1 extends React.Component {
  constructor(props) {
    console.log("ChildComponent1-constucter");
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  // 不常用
  static getDerivedStateFromProps(props) {
    console.log("ChildComponent1-getDerivedStateFromProps", props);
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log("ChildComponent1-getSnapshotBeforeUpdate");
    return "shot";
  }

  // // 组件将要接受属性
  // componentWillReceiveProps() {
  //   console.log("ChildComponent1-componentWillReceiveProps");
  // }

  // // 组件将要挂载的钩子
  // componentWillMount() {
  //   console.log("ChildComponent1-componentWillMount");
  // }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log(window.history);
    // this.props.history.listen(location => {
    //   if (this.props.location.pathname !== location.pathname){
    //     console.log("监听路由切换了")

    //   }
    // })
    console.log("ChildComponent1-componentDidMount");
  }

  // 组件将要卸载之前
  componentWillUnmount() {
    console.log("ChildComponent1-componentDidUnmount");
  }

  // 控制组件更新的阀门
  shouldComponentUpdate() {
    console.log("ChildComponent1-shouldComponentUpdate");
    return true;
  }

  // // 组件将要更新的钩子
  // componentWillUpdate() {
  //   console.log("ChildComponent1-componentWillUpdate");
  // }

  // 组件更新完毕的钩子
  componentDidUpdate(prePros, preState, snapshotValue) {
    console.log("Count-componentDidUpdate", prePros, preState, snapshotValue);
  }

  render() {
    console.log("ChildComponent1-render");
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "solid",
          margin: "30px auto",
        }}
      >
        <h4>第一个子组件(Class)</h4>
        <p>点击了 {this.state.count} 次</p>
        <button onClick={this.add}>加1</button>
      </div>
    );
  }
}

export default ChildComponent1;
