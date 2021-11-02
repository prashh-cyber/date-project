import { combineReducers } from 'redux';
import Reducer from './reducer';

const all_reducer = combineReducers({
    frame: Reducer
});
export default all_reducer;