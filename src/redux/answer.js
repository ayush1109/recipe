import * as ActionTypes from './ActionTypes';        //Reducer Functions

export const Answer = (state = {
        isLoading: true,
        errMess: null,
        answer: {}
    }, action) => {
    switch(action.type) {
        case ActionTypes.ANSWER_ADD:
            return {...state, isLoading: false, errMess: null, answer: action.payload };

        case ActionTypes.ANSWER_LOADING:
            return {...state, isLoading: true, errMess: null, answer: {} };

        case ActionTypes.ANSWER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, answer: {} };

        default:
            return state;
    }
}