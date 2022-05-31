import './App.css';
import ChildComponent1 from './childrenComponent/ChildComponent1';
import ChildComponent2 from './childrenComponent/ChildComponent2';

  // 函数式父组件
function App() {
  return (
    <div className="App">
      函数式父组件
      <ChildComponent1 />
      <ChildComponent2 />
    </div>
  );
}

export default App;
