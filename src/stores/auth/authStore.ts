import { defineStore } from "pinia";
import { UserToken } from "../../core/management/users/domain/UserToken";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        storedToken: localStorage.getItem("token") || null,
    }),
    getters: {
        token: state => {
            if (!!state.storedToken) {
                return JSON.parse(state.storedToken);
            }
            return state.storedToken;
        },
        authenticated: state => !!state.storedToken
    },
    actions: {
        storeToken(token: UserToken) {
            const stringifiedToken = JSON.stringify(token);
            localStorage.setItem('token', stringifiedToken);
            this.storedToken = stringifiedToken;
        },
        clearToken() {
            localStorage.removeItem('token');
            this.storedToken = null;
        },
        clearAuthenticationState(authenticated: boolean) {
            this.authenticated = !authenticated;
        }
    }
});