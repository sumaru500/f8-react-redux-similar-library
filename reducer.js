const initialState = {
    cars: ['BMW', 'Porsche'],
};

export default function myReducer(state = initialState, action, ...args) {
    console.log(action, args)
    switch (action) {
        case 'ADD': 
            return {
                ...state,
                cars: [...state.cars, ...args]
            };
        default:
            return state; 
    }
}