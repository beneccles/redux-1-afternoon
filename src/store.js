import { createStore } from 'redux'

//Initial STATE
const initialState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: []
}

// ACTION CONSTANTS
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHORFIRST = 'UPDATE_AUTHORFIRST'
export const UPDATE_AUTHORLAST = 'UPDATE_AUTHORLAST'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'

// Reducer
function reducer(state = initialState, action) {
    const {type, payload } = action
    switch(type) {
        case UPDATE_NAME:
            // ... operator will return a new object with the same data.
            // "copy the rest of state in an immutable way.""
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, category: payload}
        case UPDATE_AUTHORFIRST:
            return {...state, authorFirst: payload}
        case UPDATE_AUTHORLAST:
            return {...state, authorLast: payload}
        case UPDATE_INGREDIENTS:
            return {...state, ingredients: payload}
        case UPDATE_INSTRUCTIONS:
            return {...state, instructions: payload}
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)