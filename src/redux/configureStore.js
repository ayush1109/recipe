import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Recipes} from './recipes';
import {Answer} from './answer';
import { Ingredients } from './ingredients';

export const ConfigureStore = () => {
    const Store = createStore(          //Redux Store
        combineReducers({
            recipes: Recipes,
            answer: Answer,
            ingredients: Ingredients
            }),
        applyMiddleware(thunk, logger)
    );
    
    return Store;
}