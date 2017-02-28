

const initialState = {
    //important to set defaults...
    message: ""
};


export function offer(state = initialState, action = {}) {
    //picks up a dispatched event.. and updates the Redux State accordingly...
    switch (action.type) {
        case "TOAST_SWITCH":
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
}


export default offer;
