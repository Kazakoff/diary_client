import { getToken } from "../../../../service/token.service";
import { isUnauthorized, isBadRequest } from "../../../../service/http.service";
import Navigation from "../../../../service/navigation.service";

import Vue from "vue";

let LOAD_URL = "http://localhost:8070/load/teachers";

let cache = []; // TODO data from server

export default {

    name: "TeachersModule",

    data: function() {
        return { teachers: cache }
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
                    console.log("RESPONSE FROM SERVER. TEACHER CACHE: ", cache);

                    Navigation.settings.isHome = true;
                    Navigation.settings.isProfile = false;
                    Navigation.settings.isAbout = false;
                    Navigation.settings.isSchedule = false;
                    Navigation.settings.isRule = false;

                    Navigation.student.isControlExercise = false;
                    Navigation.student.islifestyle = false;
                    Navigation.student.isPhysicalDevelopment = false;
                    Navigation.student.isPhysicalFitness = false;
                    Navigation.student.isTeachers = true;

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

    methods: {}

};
