import { getToken, getAuthority } from "../../../../service/token.service";
import { isUnauthorized } from "../../../../service/http.service";
import Navigation from "../../../../service/navigation.service";

import Vue from "vue";
import Data from "./data/data";

let LOAD_FACULTIES_URL = "http://192.168.50.12:8080/diary/root/load/faculties";
let CREATE_OR_UPDATE_FACULTY_URL = "http://192.168.50.12:8080/diary/root/add/or/update/faculty";
let DELETE_FACULTY_URL = "http://192.168.50.12:8080/diary/root/remove/faculty/";

let CREATE_OR_UPDATE_GROUP_URL = "http://192.168.50.12:8080/diary/root/add/or/update/faculty/group";
let DELETE_GROUP_URL = "http://192.168.50.12:8080/diary/root/remove/faculty/group/";

let REGISTER_USERS_AS_ADMIN_URL ="http://192.168.50.12:8080/diary/admin/register/users";
let REGISTER_USERS_AS_ROOT_ADMIN_URL ="http://192.168.50.12:8080/diary/root/register/users";

let facultyCache = []; // TODO data from server

export default {

    name: "UniversityModule",

    data: function() {
        return {
            faculty: clone(Data.Faculty),
            group: clone(Data.Group),
            showStudents: false,
            facultyModal: false,
            groupModal: false,
            removeModal: false,
            editModal: false,
            removedFacultyId: null,
            editGroupModal: false,
            removeGroupModal: false,
            removedGroupId: null,

            regInfo: null,
            regModal: false,
            unsupportedFormat: false
        }
    },

    computed: {
        msg() { return this.$store.state.locale; }
    },

    beforeRouteEnter (to, from, next) {
        Vue.http.get(LOAD_FACULTIES_URL, {
            headers: { "X-Authorization": getToken() }
        })
            .then(
                (response) => {
                    facultyCache = response.body;
                    console.log("RESPONSE FROM SERVER. FACULTY CACHE: ", facultyCache);

                    Navigation.settings.isHome = true;
                    Navigation.settings.isProfile = false;
                    Navigation.settings.isAbout = false;
                    Navigation.settings.isSchedule = false;
                    Navigation.settings.isRule = false;

                    Navigation.admin.isUniversity = true;
                    Navigation.admin.isAdminUser = false;
                    Navigation.admin.isStudentUser = false;
                    Navigation.admin.isTeacherUser = false;

                    console.log("NAV: ", Navigation.admin);

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

        faculties() {
			return facultyCache;
        },

        hideRegModal() {
            this.unsupportedFormat = false;
            this.regModal = false;
        },

        showFacultyModal() {
            this.facultyModal = !this.facultyModal;
        },
        hideFacultyModal() {
            this.faculty = clone(Data.Faculty);
            this.facultyModal = false;
        },

        showGroupModal() {
            this.groupModal = !this.groupModal;
        },
        hideGroupModal() {
            this.group = clone(Data.Group);
            this.groupModal = false;
        },

        showRemoveModal(id) {
            this.removedFacultyId = id;
            this.removeModal = !this.removeModal;
        },
        hideRemoveModal() {
            this.removeModal = false;
        },

        showEditModal(faculty) {
            this.faculty.id = faculty.id;
            this.faculty.name = faculty.name;
            console.log(this.faculty);
            this.editModal = !this.editModal;
        },
        hideEditModal() {
            this.editModal = false;
        },

        showEditGroupModal(group, facultyId) {
            this.group.id = group.id;
            this.group.name = group.name;
            this.group.facultyId = facultyId;
            console.log(this.group);
            this.editGroupModal = !this.editGroupModal;
        },
        hideEditGroupModal() {
            this.editGroupModal = false;
        },

        showRemoveGroupModal(id) {
            this.removedGroupId = id;
            this.removeGroupModal = !this.removeGroupModal;
        },
        hideRemoveGroupModal() {
            this.removeGroupModal = false;
        },

        commitFaculty() {
            console.log("REQUEST TO SERVER. NEW FACULTY: ", this.faculty);
            this.$http.post(CREATE_OR_UPDATE_FACULTY_URL, this.faculty, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        putFaculty(response.body);
                        console.log("RESPONSE FROM SERVER. NEW FACULTY: ", response.body);
                        console.log("FACULTY CACHE: ", facultyCache);
                        this.hideFacultyModal();
                        this.hideEditModal();
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },

        commitGroup() {
            console.log("REQUEST TO SERVER. NEW GROUP: ", this.group);
            this.$http.post(CREATE_OR_UPDATE_GROUP_URL, this.group, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        putGroup(response.body);
                        console.log("RESPONSE FROM SERVER. NEW GROUP: ", response.body);
                        console.log("FACULTY CACHE: ", facultyCache);
                        this.hideGroupModal();
                        this.hideEditGroupModal();
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },

        removeFaculty() {

            console.log("FACULTY CACHE: ", facultyCache);
            console.log("REMOVE FACULTY WITH ID: ", this.removedFacultyId);

            this.$http.delete(DELETE_FACULTY_URL + this.removedFacultyId, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        pullFaculty(response.body);
                        this.hideRemoveModal();
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },

        removeGroup() {

            console.log("FACULTY CACHE: ", facultyCache);
            console.log("REMOVE GROUP WITH ID: ", this.removedGroupId);

            this.$http.delete(DELETE_GROUP_URL + this.removedGroupId, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("RESPONSE FROM SERVER => REMOVED GROUP ID", response.body);
                        pullGroupById(response.body);
                        this.hideRemoveGroupModal();
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );

        },


        registerUsers(event) {
            console.log("*** REGISTER USERS ***");

            let inputElement = event.srcElement;
            let file = event.target.files[0];
            let data = new FormData();
            data.append(0, file);

            let url;
            if (getAuthority() === "ROLE_ADMIN") {
                url = REGISTER_USERS_AS_ADMIN_URL;
            } else {
                url = REGISTER_USERS_AS_ROOT_ADMIN_URL;
            }

            this.$http.post(url, data, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        inputElement.value = "";
                        console.log(response.body);
                        this.regInfo = response.body;
                        this.regModal = true;
                    },
                    (response) => {
                        inputElement.value = "";
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                        if(response.body === "Unsupported format") {
                            this.unsupportedFormat = true;
                            this.regModal = true;
                        }
                    }
                );

        }

    }

};

// TODO faculty cache methods

function putFaculty(obj) {
    for (let i of facultyCache) {
        if (i.id === obj.id) {
            // let index = facultyCache.indexOf(i);
            // facultyCache.splice(index, 1);
            i.name = obj.name;
            return;
        }
    }
    facultyCache.push(obj);
}

function pullFaculty(id) {
    for (let i of facultyCache) {
        if (i.id === id) {
            let index = facultyCache.indexOf(i);
            facultyCache.splice(index, 1);
        }
    }
}

// TODO group methods

function putGroup(obj) {
    // pullGroup(obj);

    for (let f of facultyCache) {
        for (let g of f.facultyGroups) {
            if (g.id === obj.id) {
                // let index = f.facultyGroups.indexOf(g);
                // f.facultyGroups.splice(index, 1);
                g.id = obj.id;
                g.name = obj.name;
                g.facultyId = obj.faculty.id;
                return;
            }
        }
    }

    for (let f of facultyCache) {
        if (f.id === obj.faculty.id) {
            f.facultyGroups.push(obj);
            break;
        }
    }
}

function pullGroup(obj) {
    for (let f of facultyCache) {
        for (let g of f.facultyGroups) {
            if (g.id === obj.id) {
                // let index = f.facultyGroups.indexOf(g);
                // f.facultyGroups.splice(index, 1);
                g.id = obj.id;
                g.name = obj.name;
                g.facultyId = obj.faculty.id;
            }
        }
    }
}

function pullGroupById(id) {
    for (let f of facultyCache) {
        for (let g of f.facultyGroups) {
            if (g.id === id) {
                let index = f.facultyGroups.indexOf(g);
                f.facultyGroups.splice(index, 1);
            }
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
