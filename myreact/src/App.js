import "./App.css";
import ChildComponent1 from "./Day02_childrenComponent/ChildComponent1";
import ChildComponent2 from "./Day02_childrenComponent/ChildComponent2";
import Father from "./Day03_父子组件传值/子传父";
import Parent from "./Day03_父子组件传值/父传子";

// 函数式父组件
function App() {
  return (
    <div className="App">
      <div className="Day03">
        Day03
        <br />
        <Parent />
        <Father />
      </div>
      <hr />
      Day02
      <br />
      函数式父组件
      <ChildComponent1 count={10} />
      <ChildComponent2 count={20} />
    </div>
  );
}

export default App;
