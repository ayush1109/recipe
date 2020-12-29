import * as ActionTypes from './ActionTypes';
import { baseUrl, addUrl, findByIngredientsUrl, quickAnswerUrl } from '../shared/baseUrl';


export const fetchRecipes = (name) => (dispatch) => {
    dispatch(recipeLoading(true));

    return fetch(baseUrl + name + addUrl)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(recipes => dispatch(addRecipe(recipes)))
            .catch(error => dispatch(recipeFailed(error.message)));
}

export const recipeLoading = () => ({
    type: ActionTypes.RECIPE_LOADING
});

export const recipeFailed = (errmess) => ({
    type: ActionTypes.RECIPE_FAILED,
    payload: errmess
})

export const addRecipe = (recipes) => ({
    type: ActionTypes.RECIPE_ADD,
    payload: recipes
});


export const fetchAnswer = (question) => (dispatch) => {
    dispatch(answerLoading(true));

    return fetch(quickAnswerUrl + question + addUrl)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(answer => dispatch(addAnswer(answer)))
            .catch(error => dispatch(answerFailed(error.message)));
}

export const answerLoading = () => ({
    type: ActionTypes.ANSWER_LOADING
});

export const answerFailed = (errmess) => ({
    type: ActionTypes.ANSWER_FAILED,
    payload: errmess
})

export const addAnswer = (answer) => ({
    type: ActionTypes.ANSWER_ADD,
    payload: answer
});



export const fetchIngredients = (ingredients) => (dispatch) => {
    dispatch(ingredientsLoading(true));

    return fetch(findByIngredientsUrl + ingredients + addUrl)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(answer => dispatch(addIngredients(answer)))
            .catch(error => dispatch(ingredientsFailed(error.message)));
}

export const ingredientsLoading = () => ({
    type: ActionTypes.INGREDIENTS_LOADING
});

export const ingredientsFailed = (errmess) => ({
    type: ActionTypes.INGREDIENTS_FAILED,
    payload: errmess
})

export const addIngredients = (answer) => ({
    type: ActionTypes.INGREDIENTS_ADD,
    payload: answer
});
