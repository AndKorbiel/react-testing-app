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
    ]
}

export function mainReducer(state = initialState, action) {
    return state
}