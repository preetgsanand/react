import { combineReducers } from 'redux';
import navigationReducer from './NavigationReducer';
import weatherReducer from './WeatherReducer';

const mainReducer = combineReducers({
    app : navigationReducer
});

export default mainReducer;