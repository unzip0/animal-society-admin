import { defineStore } from "pinia";
import { User } from "../../core/management/users/domain/User";
import { UserService } from '../../core/management/users/infrastructure/persistence/UserService';
import { LoginUser } from '../../core/management/users/application/login/LoginUser';
import { UpdateUser } from "../../core/management/users/application/update/UpdateUser";
import { RegisterUser } from "../../core/management/users/application/register/RegisterUser";
import { LogoutUser } from "../../core/management/users/application/logout/LogoutUser";

export const useUserStore = defineStore("user", {
    state: () => ({
        storedUser: localStorage.getItem("user") || null,
    }),
    getters: {
        user: state => {
            if (!!state.storedUser) {
                return JSON.parse(state.storedUser);
            }
            return state.storedUser;
        },
    },
    actions: {
        async login(email: string, password: string) {
            const loginUser = new LoginUser(new UserService());
            return await loginUser.execute(email, password);
        },
        async update(user: User) {
            const updateUser = new UpdateUser(new UserService());
            return await updateUser.execute(user);
        },
        async register(user: User, password: string) {
            const registerUser = new RegisterUser(new UserService());
            return await registerUser.execute(user, password);
        },
        async logout() {
            const logoutUser = new LogoutUser(new UserService());
            return await logoutUser.execute();
        },
        storeUser(user: User) {
            this.storedUser = JSON.stringify(user);
            localStorage.setItem('user', this.storedUser);
        },
        clearUser() {
            localStorage.removeItem('user');
            this.storedUser = null;
        }
    }
});