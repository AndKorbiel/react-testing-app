export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_STORE = 'CLEAR_STORE';

export function addToCart(service) {
    return {
        type: ADD_TO_CART,
        payload: service
    }
}

export function removeFromCart(service, index) {
    const payload = {data: service, index}
    return {
        type: REMOVE_FROM_CART,
        payload: payload
    }
}

export function clearStore() {
    return {
        type: CLEAR_STORE
    }
}