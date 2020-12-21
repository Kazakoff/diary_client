import { getToken, getUserId } from "../../../../service/token.service";
import { isUnauthorized, isBadRequest } from "../../../../service/http.service";
import Navigation from "../../../../service/navigation.service";
import { searchByFullName } from "../../../../service/search.service";

import Vue from "vue";
import Data from "./data/data";

let LOAD_URL = "http://localhost:8070/root/load/admins";
let CREATE_ADMIN_URL = "http://localhost:8070/root/add/admin";
let CREATE_ROOT_ADMIN_URL = "http://localhost:8070/root/add/root/admin";
let DELETE_URL = "http://localhost:8070/root/remove/admins";

let cache = []; // TODO data from server

export default {

    name: "AdminUserModule",

    data: function() {
        return {
            modal: false,
            removeModal: false,
            registrationDetails: clone(Data.RegistrationDetails),
            idList: [],
            root: false,
            usernameError: null,
            passwordError: null,
            searchString: "",
        }
    },

    computed: {
        msg() { return this.$store.state.locale; }
    },

    beforeRouteEnter (to, from, next) {
        Vue.http.get(LOAD_URL, {
            headers: { "X-Authorization": getToken() }
        })
            .then(
                (response) => {
                    cache = response.body;
                    console.log("CURRENT USER ID", getUserId());
                    pull(parseInt(getUserId()));
                    console.log("RESPONSE FROM SERVER. USER CACHE: ", cache);

                    Navigation.admin.isUniversity = false;
                    Navigation.admin.isAdminUser = true;
                    Navigation.admin.isStudentUser = false;
                    Navigation.admin.isTeacherUser = false;

                    next(true);
                },
                (response) => {
                    if (isUnauthorized(response)) {
                        next("/authentication");
                    } else {
                        next(true);
                    }
                }
            );
    },

    methods: {

        users() { return searchByFullName(this.searchString, cache); },

        showModal() {
            this.modal = !this.modal;
        },
        hideModal() {
            this.root = false;
            this.registrationDetails = clone(Data.RegistrationDetails);
            this.usernameError = null;
            this.passwordError = null;
            this.modal = false;
        },

        showRemoveModal() {
            this.removeModal = !this.removeModal;
        },
        hideRemoveModal() {
            this.idList = [];
            this.removeModal = false;
        },

        commit() {

            this.usernameError = null;
            this.passwordError = null;

            console.log("REQUEST TO SERVER. REGISTRATION DETAILS: ", this.registrationDetails);

            let url = "";
            if (this.root) {
                url = CREATE_ROOT_ADMIN_URL;
            } else {
                url = CREATE_ADMIN_URL;
            }

            this.$http.post(url, this.registrationDetails, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        put(response.body);
                        console.log("RESPONSE FROM SERVER. USER REGISTERED: ", response.body);
                        console.log("USER CACHE: ", cache);
                        this.hideModal();
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        } else if (isBadRequest(response)) {
                            console.warn("REGISTRATION ERROR: ", response);
                            for (let error of response.body) {
                                if (error.field === "username") {
                                    this.usernameError = error.code;
                                }
                                if (error.field === "password") {
                                    this.passwordError = error.code;
                                }
                            }
                        }
                    }
                );
        },

        remove() {
            let admins = {};
            admins["admins"] = this.idList;

            console.log("REQUEST TO SERVER. USERS => IDs: ", admins);

            this.$http.post(DELETE_URL, admins, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        for (let id of response.body) {
                            pull(id);
                        }
                        this.hideRemoveModal();
                        console.log("RESPONSE FROM SERVER. USERS DELETED => IDs: ", response.body);
                        console.log("USER CACHE: ", cache);
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                        console.log(response);
                    }
                );
        }

    }

};

// TODO cache methods

function put(obj) {
    for (let i of cache) {
        if (i.id === obj.id) {
            let index = cache.indexOf(i);
            cache.splice(index, 1);
        }
    }
    cache.push(obj);
}

function pull(id) {
    for (let i of cache) {
        if (i.id === id) {
            let index = cache.indexOf(i);
            cache.splice(index, 1);
        }
    }
}

// TODO utils

function clone(obj) {
    let clone = {};
    for (let key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}
