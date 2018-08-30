import {combineReducers} from 'redux';
import {languageReducer} from './main';
import bookReducer from './book'

const allReducers = combineReducers({
    language: languageReducer,
    books: bookReducer  
});

export default allReducers