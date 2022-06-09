import { legacy_createStore, combineReducers } from "redux";
import todoReducer from "./todo_reducer";
import countReducer from "../../Day05_react-redux/redux/count_reducer"

const allReducer = combineReducers({
    count: countReducer,
    todo: todoReducer
})

let store = legacy_createStore(allReducer);
export default store;
