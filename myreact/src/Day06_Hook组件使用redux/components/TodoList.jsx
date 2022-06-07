import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODO, TOGGLE_COMPLETE } from "../redux/todo_action";

function TodoList(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  function itemChange(e) {
    const { target } = e;
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: {
        id: target.dataset.id,
        isComplete: target.checked,
      },
    });
  }

  function deleteItem(deleteIndex){
      console.log(deleteIndex)
      dispatch({
          type: DELETE_TODO,
          payload: deleteIndex
          
      })
  }

  function renderList(todos, display) {
    return todos
      .filter((item) => {
        switch (display) {
          case "complete":
            return item.isComplete;
          case "uncomplete":
            return !item.isComplete;
          default:
            return true;
        }
      })
      .map((item, index) => {
        if (item.isComplete) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                data-id={item.id}
                checked={true}
                onChange={itemChange}
              />
              <del>{item.title}</del>
              <button type="button" onClick={() => deleteItem(index)}>
                删除
              </button>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <input
                type="checkbox"
                data-id={item.id}
                checked={false}
                onChange={itemChange}
              />
              <span>{item.title}</span>
              <button type="button" onClick={() => deleteItem(index)}>
                删除
              </button>
            </li>
          );
        }
      });
  }

  return (
    <div>
      <ul>{renderList(state.todos, state.display)}</ul>
    </div>
  );
}

export default TodoList;
