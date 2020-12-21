import { getAuthority } from "./token.service";

const authorities = [
    { name: "ROLE_STUDENT", path: "/student", home: "/teachers" },
    { name: "ROLE_TEACHER", path: "/teacher", home: "/search" },
    { name: "ROLE_ADMIN", path: "/admin", home: "/student_user" },
    { name: "ROLE_ROOT_ADMIN", path: "/admin", home: "/university" }
];

export function getPath() {
    let path;
    for (let i = 0; i < authorities.length; i++) {
        if (authorities[i].name === getAuthority()) {
            path = authorities[i].path;
        }
    }
    return path;  
}

export function getHomePath() {
    let path;
    for (let i = 0; i < authorities.length; i++) {
        if (authorities[i].name === getAuthority()) {
            path = authorities[i].home;
        }
    }
    return path;
}