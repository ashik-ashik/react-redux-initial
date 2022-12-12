import { composeWithDevTools } from '@redux-devtools/extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartCounter from './middleWares/cartCounter';
import rootReducer from './reducers/rootReducer';
// import logger from 'redux-logger';

const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(cartCounter, thunk)
    ));
export default store;