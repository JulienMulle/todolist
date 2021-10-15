import { combineReducers } from "redux";
import { tasksList } from "./tasksList";

// on combine plusieurs reducer pour pouvoir les passés directement dans le store
export const rootReducders = combineReducers({
    tasksList
})