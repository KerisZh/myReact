import React, { useState } from "react";

function ChildComponent2() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "solid",
        margin: "auto",
      }}
    >
      <h4>第二个子组件（Hook）</h4>
      <p>点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>加1</button>
    </div>
  );
}

// class ChildComponent2 extends React.Component{
//     render() {
//       return <div style={{width: '200px', height: '200px', border: 'solid', margin: 'auto'}}>第一个子组件</div>
//     }
// }

export default ChildComponent2;
