const UNAUTHORIZED = 401;
const BAD_REQUEST = 400;

export function isUnauthorized(response) {
    return response.status === UNAUTHORIZED;
}

export function isBadRequest(response) {
    return response.status === BAD_REQUEST;
}
