import { legacy_createStore } from "redux";
import todoReducer from "./todo_reducer";

let store = legacy_createStore(todoReducer);
export default store;
