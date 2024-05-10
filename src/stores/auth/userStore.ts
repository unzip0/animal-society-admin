import { defineStore } from "pinia";

export const userStore = defineStore("user", {
    state: () => ({
        storedToken: localStorage.getItem("token") || null,
        storedUser: localStorage.getItem("user") || null
    }),
    getters: {
        user: state => {
            if (!!state.storedUser) {
                return JSON.parse(state.storedUser);
            }
            return state.storedUser;
        },
        token: state => {
            if (!!state.storedToken) {
                return JSON.parse(state.storedToken);
            }
            return state.storedToken;
        },
        userIsAuth: state => !!state.storedToken
    },
    actions: {
        storeLoggedInUser(token, user) {
            const _this = this;

            const stringifiedToken = JSON.stringify(token);
            localStorage.setItem('token', stringifiedToken);
            const stringifiedUser = JSON.stringify(user);
            localStorage.setItem('user', stringifiedUser);

            _this.storedToken = stringifiedToken;
            _this.storedUser = stringifiedUser;
        },
        logout() {
            const _this = this;
        
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        
            _this.storedToken = null;
            _this.storedUser = null;
        }
    }
});