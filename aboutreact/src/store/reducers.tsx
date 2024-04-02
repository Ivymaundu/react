// import { LOGOUT } from "./authentications.ts";

interface AuthType {
    name: Text;
    isLoggedIn: boolean,
    

}
const logoutUser = () => ({
    type: LOGOUT
  });

const initialState = {
    isLoggedIn: false,
    name: ''
}


const authReducer = (state = initialState, action: AuthType) => {
    switch (action.isLoggedIn) {
        case true:
            return {
                ...state,
                isAuthenticated: action.isLoggedIn,
                name: action.name,
            };

        // case LOGOUT:
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         name: ''
        //     };
        default:
            return state;
    };

}

export default authReducer;