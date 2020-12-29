import * as ActionTypes from './ActionTypes';        //Reducer Functions

export const Recipes = (state = {
        isLoading: true,
        errMess: null,
        recipes: {}
    }, action) => {
    switch(action.type) {
        case ActionTypes.RECIPE_ADD:
            return {...state, isLoading: false, errMess: null, recipes: action.payload };

        case ActionTypes.RECIPE_LOADING:
            return {...state, isLoading: true, errMess: null, recipes: {} };

        case ActionTypes.RECIPE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, recipes: {} };

        default:
            return state;
    }
}