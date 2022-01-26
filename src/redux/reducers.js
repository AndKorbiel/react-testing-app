import {ADD_TO_CART, CLEAR_STORE, REMOVE_FROM_CART} from "./actions";

const initialState = {
    servicesList: [
        {
            name: 'Test service A',
            description: 'Description of Test service A',
            price: 100
        },
        {
            name: 'Test service B',
            description: 'Description of Test service B',
            price: 50
        }
    ],
    cart: []
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((el, index) => index !== action.payload.index )
            }
        case CLEAR_STORE:
            return initialState
        default:
            return state
    }
}