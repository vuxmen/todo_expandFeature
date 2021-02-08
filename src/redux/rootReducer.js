import { combineReducers } from "redux";
import { auth } from "./reducer/auth";
import { status } from "./reducer/status";
import { todo } from "./reducer/todo";
import { display } from "./reducer/display";
export default combineReducers({ auth, todo, status, display });
