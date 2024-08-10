import {combineReducers} from 'redux';
import LangReducer from './Reducer_lan';
import ThemeReducer from './Reducer_them';



export default combineReducers(

    {
        myLang:LangReducer,
        myTheme:ThemeReducer
    }
)
