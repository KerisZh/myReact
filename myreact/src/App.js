import "./App.css";
import React from "react";
import { Link, useRoutes } from "react-router-dom";
import ChildComponent1 from "./Day02_childrenComponent/ChildComponent1";
import ChildComponent2 from "./Day02_childrenComponent/ChildComponent2";
import Father from "./Day03_父子组件传值/子传父";
import Parent from "./Day03_父子组件传值/父传子";
import routes from "./routes";
import Count from "./Day05_react-redux/containers/Count";
import store from "./Day05_react-redux/redux/store";
import TodoHeader from "./Day06_Hook组件使用redux/components/TodoHeader";
import TodoList from "./Day06_Hook组件使用redux/components/TodoList";
import TodoFooter from "./Day06_Hook组件使用redux/components/TodoFooter";

// 函数式父组件
function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <div className="Day06">
        Day06
        <br />
        <div>
          <h2>hook中使用redux</h2>
          <div>
            <TodoHeader />
            <TodoList />
            <TodoFooter />
          </div>
        </div>
      </div>
      <hr />
      <div className="Day05">
        Day05
        <br />
        <div>
          <h2>React-redux</h2>
          <div>{/* <Count /> */}</div>
        </div>
      </div>
      <hr />
      <div className="Day04">
        Day04
        <br />
        <div>
          <h2>React Router Demo</h2>
          <div>
            <div>
              <Link to="/ChildComponent1">ChildComponent1</Link>
              <br />
              <Link to="/ChildComponent2">ChildComponent2</Link>
            </div>
            <div>{element}</div>
          </div>
        </div>
      </div>
      <hr />
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
