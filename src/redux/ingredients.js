import * as ActionTypes from './ActionTypes';        //Reducer Functions

export const Ingredients = (state = {
        isLoading: true,
        errMess: null,
        ingredients: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.INGREDIENTS_ADD:
            return {...state, isLoading: false, errMess: null, ingredients: action.payload };

        case ActionTypes.INGREDIENTS_LOADING:
            return {...state, isLoading: true, errMess: null, ingredients: [] };

        case ActionTypes.INGREDIENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, ingredients: [] };

        default:
            return state;
    }
}