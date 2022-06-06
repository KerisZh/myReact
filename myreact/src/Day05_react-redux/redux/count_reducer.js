import { INCREMENT, DECREMENT } from "./constant";

const initState = 66;
export default function countReducer(preState = initState, action) {
  console.log(preState, action);
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
        console.log('@')
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
