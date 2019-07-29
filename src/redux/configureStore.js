import {createStore, combineReducers, applyMiddleware} from 'redux';

import { books } from './books';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { createForms } from 'react-redux-form';
//import { InitialFeedback } from './forms';
export const ConfigureStore = () =>{ 

    const store = createStore(
       combineReducers({
           books: books,
          
       }),
       applyMiddleware(thunk,logger)
       
        
    );
    return store;
}