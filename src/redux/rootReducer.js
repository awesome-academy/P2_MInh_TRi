import {combineReducers} from 'redux';
import newsReducer from './reducers/newsReducer';
import productReducer from './reducers/productReducer';
import sliderReducer from './reducers/sliderReducer';
import i18Reducer from './reducers/i18Reducer';

const rootReducer = combineReducers({
    slider : sliderReducer,
    product : productReducer,
    news : newsReducer,
    i18n: i18Reducer,
})

export default rootReducer;