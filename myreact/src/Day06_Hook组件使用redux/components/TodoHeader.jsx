import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../redux/todo_action";

function TodoHeader(props) {
  const state = useSelector((state) => ({ todos: state.todos }));
  const newTodoInput = useRef(null);
  const dispatch = useDispatch();

  function addClick(e) {
    const title = newTodoInput.current.value;
    dispatch({
      type: ADD_TODO,
      payload: {
        id: ~~(Math.random() * 1000000),
        title,
        isComplete: false,
      },
    });
  }

  function getUnCompleteCount(todos) {
    return todos.filter((item) => !item.isComplete).length;
  }

  return (
    <div>
      <div>你有{getUnCompleteCount(state.todos)}项未完成</div>
      <div>
        <input type="text" ref={newTodoInput} />
        <button type="button" onClick={addClick}>
          添加
        </button>
      </div>
    </div>
  );
}

export default TodoHeader;
