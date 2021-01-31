const TOKEN_KEY = "user-token";
const USER_KEY = "username";

const StorageService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    getUsername() {
        return localStorage.getItem(USER_KEY);
    }
};

export { StorageService, TOKEN_KEY, USER_KEY };
