import {createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducer from "./reducer/combineReducer";

const MyStore = createStore (combineReducer,composeWithDevTools())

export default MyStore;