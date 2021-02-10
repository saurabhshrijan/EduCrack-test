import { combineReducers } from "redux";
import auth from "./reducer_auth";
import users from "./reducer_users";
import items from "./reducer_items";
const rootReducer = combineReducers({
  users,
  auth,
  items
});
export default rootReducer;
