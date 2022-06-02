import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ChildComponent2 = React.memo((props) => {
  const [count, setCount] = useState(0);

  // 模拟DidMount
  useEffect(() => {
    console.log("ChildComponent2=======只渲染一次(相当于DidMount)=======");
    console.log(count);
  });

  // 模拟 Didmount和DidUpdate 、 unmount
  useEffect(() => {
    // 在 componentDidMount，以及 count 更改时 componentDidUpdate 执行的内容
    console.log(
      "ChildComponent2======初始化、或者 count 改变时才执行(相当于Didmount和DidUpdate)========="
    );
    console.log(count);
  }, [count]);

  // 返回函数时相当于WillUnmount
  useEffect(() => {
    return () => {
      console.log("ChildComponent2=======相当于WillUnmount=======");
    };
  }, []);

  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        border: "solid",
        margin: "auto",
      }}
    >
      <h4>第二个子组件（Hook）</h4>
      <p>点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>加1</button>
      <div>
        <Link to="1_1">二级组件_1</Link>
        <br />
        <Link to="1_2">二级组件_2</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
});

// class ChildComponent2 extends React.Component{
//     render() {
//       return <div style={{width: '200px', height: '200px', border: 'solid', margin: 'auto'}}>第一个子组件</div>
//     }
// }

export default ChildComponent2;
