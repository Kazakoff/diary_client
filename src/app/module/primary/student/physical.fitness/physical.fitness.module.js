import { getUserId, getToken, getAuthority, remove } from "../../../../service/token.service";
import { isUnauthorized } from "../../../../service/http.service";
import Navigation from "../../../../service/navigation.service";

import Vue from "vue";
import Data from "./data/data";

let LOAD_URL = "http://192.168.50.12:8080/diary/student/load/physical/fitness/";
let CREATE_OR_UPDATE_URL = "http://192.168.50.12:8080/diary/student/add/or/modify/physical/fitness";
let DELETE_URL = "http://192.168.50.12:8080/diary/student/remove/physical/fitness/";

let cache = []; // TODO data from server

export default {
    name: "PhysicalFitnessModule",
    data: function() {
        return {
            modal: false,
            obj: clone(Data.PhysicalFitness)
        }
    },
    computed: {
        msg() { return this.$store.state.locale; },
        parameters() { return this.$store.state.locale.physical_fitness.parameters; }
    },
    beforeRouteEnter (to, from, next) {
        Vue.http.get(LOAD_URL + getUserId(), {
            headers: { "X-Authorization": getToken() }
        })
            .then(
                (response) => {
                    cache = response.body;
                    console.log("CACHE: ", cache);

                    Navigation.student.isControlExercise = false;
                    Navigation.student.islifestyle = false;
                    Navigation.student.isPhysicalDevelopment = false;
                    Navigation.student.isPhysicalFitness = true;
                    Navigation.student.isTeachers = false;

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

        displayedObjList() {
            let parameters = this.$store.state.locale.physical_fitness.parameters;
            let displayedObjList = [];
            for (let parameter of parameters) {
                for (let i of cache) {
                    if (parameter.id === i.parameterId) {
                        let displayedObj = clone(i);
                        displayedObj["name"] = parameter.name;
                        displayedObjList.push(displayedObj);
                    }
                }
            }
            return displayedObjList;
        },

        reload() { this.obj = load(this.obj.parameterId); },

        showModal() {
            this.reload();
            this.modal = !this.modal;
        },
        hideModal() {
            this.reload();
            this.modal = false;
        },

        commit() {
            this.obj["studentId"] = getUserId();
            this.$http.post(CREATE_OR_UPDATE_URL, this.obj, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("OBJ: ", this.obj);
                        put(response.body);
                        if (this.obj.id === null) {
                            this.reload();
                        }
                        console.log("OBJ: ", this.obj);
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },

        remove() {
            console.log("CACHE: ", cache);
            let currentParameterId = this.obj.parameterId;
            if (this.obj.id !== null) {
                this.$http.delete(DELETE_URL + this.obj.id, {
                    headers: { "X-Authorization": getToken() }
                })
                    .then(
                        (response) => {
                            pull(response.body);
                            this.obj = Data.PhysicalFitness;
                            this.obj["parameterId"] = currentParameterId;
                        },
                        (response) => {
                            if (isUnauthorized(response)) {
                                this.$router.push("/authentication");
                            }
                        }
                    );
            }
        }
    }
};

// TODO cache methods

function load(parameterId) {

    let obj = clone(Data.PhysicalFitness);
    obj["parameterId"] = parameterId;

    if (cache.length !== 0 ) {
        for (let i of cache) {
            if (i.parameterId === parameterId) {
                obj = clone(i);
            }
        }
    }
    return obj;
}

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
    console.log("CACHE: ", cache);
}

// TODO utils

function clone(obj) {
    let clone = {};
    for (let key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}