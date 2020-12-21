import { getToken, getUserId, getAuthority, remove } from "../../../service/token.service";
import { isUnauthorized } from "../../../service/http.service";
import Navigation from  "../../../service/navigation.service";

import Vue from "vue";

let LOAD_STUDENT_PROFILE = "http://localhost:8070/student/load/profile/";
let LOAD_TEACHER_PROFILE = "http://localhost:8070/teacher/load/profile/";
let LOAD_ADMIN_PROFILE = "http://localhost:8070/admin/load/profile/";

let LOAD_FACULTIES_URL = "http://localhost:8070/student/load/faculties";

let EDIT_STUDENT_URL = "http://localhost:8070/student/edit/profile";
let EDIT_TEACHER_URL = "http://localhost:8070/teacher/edit/profile";
let EDIT_ADMIN_URL = "http://localhost:8070/admin/edit/profile";

let faculties;
let profile;

let groupId = null;

export default {

    name: "ProfileModule",

    data: function() {
        return {
            auth: getAuthority(),
            groupId: groupId
        }
    },

    computed: {
        msg() { return this.$store.state.locale; },
        genders() { return this.$store.state.locale.genders; },
        courses() { return [1, 2, 3, 4]; },

        groups() {
            let allGroups = [];
            for (let faculty of faculties) {
                if (faculty.facultyGroups.length !== 0) {
                    allGroups = allGroups.concat(faculty.facultyGroups);
                }
            }
            return allGroups;
        },

        profile() {
            if (getAuthority() === "ROLE_STUDENT") { profile.birthDate = new Date(profile.birthDate).toISOString().slice(0, 10); }
            return profile;
        }
    },

    beforeRouteEnter (to, from, next) {

        Navigation.settings.isHome = false;
        Navigation.settings.isProfile = true;
        Navigation.settings.isAbout = false;
        Navigation.settings.isSchedule = false;
        Navigation.settings.isRule = false;

        if (getAuthority() === "ROLE_STUDENT") {

            loadFaculties(next);
            loadStudentProfile(next);

        } else if (getAuthority() === "ROLE_TEACHER") {

            loadTeacherProfile(next);

        } else if (getAuthority() === "ROLE_ADMIN" || getAuthority() === "ROLE_ROOT_ADMIN") {

            loadAdminProfile(next);

        }

    },

    methods: {
        commitStudent() {
            let student = {};
            student["id"] = this.profile.id;
            student["firstName"] = this.profile.firstName;
            student["middleName"] = this.profile.middleName;
            student["lastName"] = this.profile.lastName;
            student["nationality"] = this.profile.nationality;
            student["gender"] = this.profile.gender;

            student["birthDate"] = new Date(this.profile.birthDate).getTime();

            student["birthPlace"] = this.profile.birthPlace;
            student["school"] = this.profile.school;
            student["address"] = this.profile.address;
            student["medicalGroup"] = this.profile.medicalGroup;
            student["diagnosis"] = this.profile.diagnosis;
            student["studentNumber"] = this.profile.studentNumber;
            student["course"] = this.profile.course;

            student["groupId"] = this.groupId;

            if (this.profile.teacher !== null) {
                student["teacherId"] = this.profile.teacher.id;
            } else {
                student["teacherId"] = null;
            }

            console.log("STUDENT PROFILE: ", student);

            this.$http.post(EDIT_STUDENT_URL, student, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("STUDENT EDITED: ", response.body);
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );

        },
        commitTeacher() {
            let teacher = {};
            teacher["id"] = this.profile.id;
            teacher["firstName"] = this.profile.firstName;
            teacher["middleName"] = this.profile.middleName;
            teacher["lastName"] = this.profile.lastName;
            teacher["phone"] = this.profile.phone;
            teacher["post"] = this.profile.post;

            console.log("TEACHER PROFILE: ", teacher);

            this.$http.post(EDIT_TEACHER_URL, teacher, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("TEACHER EDITED: ", response.body);
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );

        },
        commitAdmin() {
            let admin = {};
            admin["id"] = this.profile.id;
            admin["firstName"] = this.profile.firstName;
            admin["middleName"] = this.profile.middleName;
            admin["lastName"] = this.profile.lastName;

            console.log("ADMIN PROFILE: ", admin);

            this.$http.post(EDIT_ADMIN_URL, admin, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("ADMIN EDITED: ", response.body);
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        }
    }

};

function loadStudentProfile(next) {
    Vue.http.get(LOAD_STUDENT_PROFILE + getUserId(), {
        headers: { "X-Authorization": getToken() }
    })
        .then(
            (response) => {
                console.log("RESPONSE FROM SERVER. STUDENT PROFILE: ", response.body);
                profile = response.body;
                if (profile.facultyGroup !== null) {
                    console.log("*** GROUP ID NOT NULL ***");
                    groupId = profile.facultyGroup.id;
                } else {
                    console.log("*** GROUP ID NULL ***");
                    groupId = null;
                }
                console.log("*** GROUP ID ***", groupId);
                next(true);
            },
            (response) => {
                if (isUnauthorized(response)) {
                    remove();
                    next("/authentication");
                }
            }
        );
}

function loadTeacherProfile(next) {
    Vue.http.get(LOAD_TEACHER_PROFILE + getUserId(), {
        headers: { "X-Authorization": getToken() }
    })
        .then(
            (response) => {
                console.log("RESPONSE FROM SERVER. TEACHER PROFILE: ", response.body);
                profile = response.body;
                next(true);
            },
            (response) => {
                if (isUnauthorized(response)) {
                    remove();
                    next("/authentication");
                }
            }
        );
}

function loadAdminProfile(next) {
    Vue.http.get(LOAD_ADMIN_PROFILE + getUserId(), {
        headers: { "X-Authorization": getToken() }
    })
        .then(
            (response) => {
                console.log("RESPONSE FROM SERVER. ADMIN PROFILE: ", response.body);
                profile = response.body;
                next(true);
            },
            (response) => {
                if (isUnauthorized(response)) {
                    remove();
                    next("/authentication");
                }
            }
        );
}

function loadFaculties(next) {
    Vue.http.get(LOAD_FACULTIES_URL, {
        headers: { "X-Authorization": getToken() }
    })
        .then(
            (response) => {
                console.log("RESPONSE FROM SERVER. FACULTIES: ", response.body);
                faculties = response.body;
            },
            (response) => {
                if (isUnauthorized(response)) {
                    remove();
                    next("/authentication");
                }
            }
        );
}