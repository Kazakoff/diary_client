const TOKEN_KEY = "token";
const AUTHORITY_KEY = "authority";
const USER_ID_KEY = "userId";

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function createAuthorizationTokenHeader() {
    return { "X-Authorization": getToken() };
}

export function getAuthority() {
    return localStorage.getItem(AUTHORITY_KEY);
}

export function setAuthority(authority) {
    localStorage.setItem(AUTHORITY_KEY, authority);
}

export function removeAuthority() {
    localStorage.removeItem(AUTHORITY_KEY);
}

export function getUserId() {
    return localStorage.getItem(USER_ID_KEY);
}

export function setUserId(userId) {
    localStorage.setItem(USER_ID_KEY, userId);
}

export function removeUserId() {
    localStorage.removeItem(USER_ID_KEY);
}

export function remove() {
    removeToken();
    removeAuthority();
    removeUserId();
}
