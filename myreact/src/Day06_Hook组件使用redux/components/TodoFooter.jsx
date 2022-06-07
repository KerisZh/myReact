import { useDispatch } from "react-redux";
import { FILTER_DISPLAY } from "../redux/todo_action";

function TodoFooter(props) {
  const dispatch = useDispatch();

  function displayClick(display) {
    dispatch({
      type: FILTER_DISPLAY,
      payload: display,
    });
  }

  return (
    <div>
      <hr />
      <button type="button" onClick={() => displayClick("all")}>
        显示全部
      </button>
      <button type="button" onClick={() => displayClick("complete")}>
        已完成
      </button>
      <button type="button" onClick={() => displayClick("uncomplete")}>
        未完成
      </button>
    </div>
  );
}

export default TodoFooter;
