let DATA = [];

const initialState = {
    data: DATA
};

export const reducerSeries = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA': 
            return { ...state, data: action.data }
        default:
            return state;
    }
}