import {SET_AUTHENTICATED } from "./types.ts"
import { LOGOUT } from "./types.ts";

type AuthType = {
    name:string;
    isLoggedIn: boolean
}
export const logoutUser = () => ({
    type: LOGOUT
  });

export const setAuthentication = (isAuthenticated: AuthType) => ({
    type: SET_AUTHENTICATED,
    payload: isAuthenticated
})