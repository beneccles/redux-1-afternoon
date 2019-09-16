import { createStore } from 'redux'

//Initial STATE
const initialState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: ""
}

// ACTION CONSTANTS
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHORFIRST = 'UPDATE_AUTHORFIRST'
export const UPDATE_AUTHORLAST = 'UPDATE_AUTHORLAST'

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
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)