import {combineReducers} from 'redux';
import todos from "./todos";
import title from "./appBar";

export const rootReducer = combineReducers({
    todos, title
});
