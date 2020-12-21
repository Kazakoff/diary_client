import { getToken, getAuthority } from "../../../service/token.service";
import { isUnauthorized } from "../../../service/http.service";

import Vue from "vue";

import Data from "./data/data";

const UPLOAD_URL = "http://localhost:8070/admin/upload/schedule";
const LOAD_URL = "http://localhost:8070/load/schedule";
const DELETE_URL = "http://localhost:8070/admin/remove/schedule";
import Navigation from  "../../../service/navigation.service";

let schedule;

export default {

    name: "ScheduleModule",

    data: function() {
        return {
            schedule: schedule,
            spinner: false
        }
    },

    computed: {
        msg() { return this.$store.state.locale; },
        editSchedule() {
            let authority = getAuthority();
            if (authority === "ROLE_ADMIN" || authority == "ROLE_ROOT_ADMIN") {
                return true;
            } else {
                return false;
            }
        }
    },

    beforeRouteEnter (to, from, next) {
        Vue.http.get(LOAD_URL, {
            headers: { "X-Authorization": getToken() }
        })
            .then(
                (response) => {
                    schedule = response.body;
                    console.log(schedule);

                    Navigation.settings.isHome = false;
                    Navigation.settings.isProfile = false;
                    Navigation.settings.isAbout = false;
                    Navigation.settings.isSchedule = true;
                    Navigation.settings.isRule = false;

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
        upload(event) {

            this.spinner = true;

            let inputElement = event.srcElement;
            let file = event.target.files[0];
            let data = new FormData();
            data.append(0, file);

            console.log(data);

            this.$http.post(UPLOAD_URL, data, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        inputElement.value = "";
                        this.schedule = response.body;
                        this.spinner = false;
                    },
                    (response) => {
                        inputElement.value = "";
                        this.spinner = false;
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },
        remove() {

            this.$http.post(DELETE_URL, this.schedule, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        this.schedule = response.body;
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

// TODO utils

function clone(obj) {
    let clone = {};
    for (let key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}
