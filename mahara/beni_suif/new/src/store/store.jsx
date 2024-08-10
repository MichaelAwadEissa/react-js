import {createStore} from "redux";
import Reducer from "./Reducer"; 

const MyStore = createStore (Reducer)

export default MyStore;