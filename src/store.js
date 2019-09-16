import { createStore } from 'redux'

//Initial STATE
const initialState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
}

// ACTION CONSTANTS
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHORFIRST = 'UPDATE_AUTHORFIRST'
export const UPDATE_AUTHORLAST = 'UPDATE_AUTHORLAST'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_RECIPES = 'UPDATE_RECIPES'
export const CLEAR_INPUTS = 'CLEAR_INPUTS'
export const DELETE_RECIPE = 'DELETE_RECIPE'

// Reducer
function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_NAME:
            // ... operator will return a new object with the same data.
            // "copy the rest of state in an immutable way.""
            return { ...state, name: payload }
        case UPDATE_CATEGORY:
            return { ...state, category: payload }
        case UPDATE_AUTHORFIRST:
            return { ...state, authorFirst: payload }
        case UPDATE_AUTHORLAST:
            return { ...state, authorLast: payload }
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload];
            return { ...state, ingredients: newIngredients }
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload];
            return { ...state, instructions: newInstructions }
        case UPDATE_RECIPES:
            // Deconstruct state to create a new recipe.
            const {
                name, category, authorFirst,
                authorLast, ingredients, instructions
            } = state
            // Create the new recipe object to add to the array.
            const recipe = {
                name, category, authorFirst,
                authorLast, ingredients, instructions
            };
            // We build our own payload to send, since all the data
            // is already here.
            const newRecipes = [...state.recipes, recipe];
            return { ...state, recipes: newRecipes }
        case CLEAR_INPUTS:
            return {...state, name: "", category: "", authorFirst: "",
            authorLast: "", ingredients: [], instructions: []}
        case DELETE_RECIPE:
            const editRecipes = [...state.recipes]
            editRecipes.splice(payload, 1);
            return {...state, recipes: editRecipes}
        default:
            return state
            }
    }

    export default createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )