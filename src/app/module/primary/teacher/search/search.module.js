import { getToken, getUserId } from "../../../../service/token.service";
import { isUnauthorized } from "../../../../service/http.service";
import Navigation from "../../../../service/navigation.service";
import { searchByFullName } from "../../../../service/search.service";

import Vue from "vue";

let LOAD_URL = "http://localhost:8070/teacher/load/available/students";
let ADD_URL = "http://localhost:8070/teacher/add/student/to/teacher";

let cache = []; // TODO data from server

export default {

    name: "SearchModule",

    data: function() {
        return {
            searchString: "",
            addModal: false,
            stId: null
        }
    },

    computed: {
        msg() { return this.$store.state.locale; },
        students() { return searchByFullName(this.searchString, cache); }
    },

    beforeRouteEnter (to, from, next) {
        Vue.http.get(LOAD_URL, {
            headers: { "X-Authorization": getToken() }
        })
            .then(
                (response) => {
                    cache = response.body;
                    for (let i of cache) {
                        if (i.facultyGroup === null) {
                            i.facultyGroup = {};
                            i.facultyGroup["name"] = null;
                        }
                    }
                    console.log("RESPONSE FROM SERVER. AVAILABLE STUDENT CACHE: ", cache);

                    Navigation.settings.isHome = true;
                    Navigation.settings.isProfile = false;
                    Navigation.settings.isAbout = false;
                    Navigation.settings.isSchedule = false;
                    Navigation.settings.isRule = false;

                    Navigation.teacher.isSearch = true;
                    Navigation.teacher.isStudents = false;

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

        showAddModal(stId) {
            this.stId = stId;
            this.addModal = !this.addModal;
        },
        hideAddModal() {
            this.addModal = false;
        },

        add() {

            console.log("STUDENT ID: ", this.stId);
            console.log("TEACHER ID: ", getUserId());

            let relationship = {};
            relationship["studentId"] = this.stId;
            relationship["teacherId"] = getUserId();

            this.$http.post(ADD_URL, relationship, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("RESPONSE FROM SERVER. ADDED STUDENT ID: ", response.body);
                        console.log(typeof response.body);
                        pull(response.body);
                        console.log("STUDENT CACHE: ", cache);

                        this.hideAddModal();

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

// TODO cache methods

function pull(id) {
    for (let i of cache) {
        console.log(i.id + " => " + id);
        if (i.id === id) {
            let index = cache.indexOf(i);
            cache.splice(index, 1);
        }
    }
}