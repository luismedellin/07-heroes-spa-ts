import { types } from "../types/types";

// const initialState = {
//     logged: false
// }
// export const authReducer = (state = initialState, action) => {
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.Login:
            return {
                ...state,
                logged: true,
                name: action.payload
            };
        case types.Logout:
            return {
                logged: false
            };
        default:
            return state;
    }
}