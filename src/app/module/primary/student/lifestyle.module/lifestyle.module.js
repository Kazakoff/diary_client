import { getUserId, getToken, getAuthority, remove } from "../../../../service/token.service";
import { isUnauthorized } from "../../../../service/http.service";
import Navigation from "../../../../service/navigation.service";

import Vue from "vue";
import Data from "./data/data";
//import VueApexCharts from 'vue-apexcharts'


let LOAD_URL = "http://192.168.50.12:8080/diary/student/load/lifestyle/";
let CREATE_OR_UPDATE_URL = "http://192.168.50.12:8080/diary/student/add/or/modify/lifestyle";
let DELETE_URL = "http://192.168.50.12:8080/diary/student/remove/lifestyle/";

let cache = []; // TODO data from server
let filteredCache = [];
let series1 = [];
let yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,
    13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
let point1; let i; let j = 0;
for (i = 1973; i <= 2013; i++) {
    point1 = { x: i, y: yValue[j] };
    series1.push(point1); j++;
}



export default {
    name: "LifestyleModule",
    provide: {
        chart: [ScatterSeries, Trendlines, LineSeries]
      },
    data: function() {
        return {
            modal: false,
            obj: clone(Data.Lifestyle),
            courses: [1, 2, 3, 4],
            seriesData: series1,
            primaryXAxis: {
            title: 'Months',
            },
            primaryYAxis: {
            title: 'Rupees against Dollars',
            interval: 5
            },
            type: 'Linear'
        }
    },
    computed: {
        msg() { return this.$store.state.locale; },
        parameters() { return this.$store.state.locale.lifestyle.parameters; }
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
                    Navigation.student.islifestyle = true;
                    Navigation.student.isPhysicalDevelopment = false;
                    Navigation.student.isPhysicalFitness = false;
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
            let parameters = this.$store.state.locale.lifestyle.parameters;
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
            console.log(displayedObjList);
            return displayedObjList;
        },

        chartData() {
            let parameters = this.$store.state.locale.lifestyle.parameters;
            let dataArr = [];
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

        reload() {
            this.filterByCourse();
            this.obj = load(this.obj.parameterId, this.obj.course);
        },

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
                            this.obj = Data.Lifestyle;
                            this.obj["parameterId"] = currentParameterId;
                        },
                        (response) => {
                            if (isUnauthorized(response)) {
                                this.$router.push("/authentication");
                            }
                        }
                    );
            }
        },

        filterByCourse() {
            filteredCache = [];
            for (let i of cache) {
                if (i.course === this.obj.course) {
                    filteredCache.push(i);
                }
            }
        }
    }
};

// TODO cache methods

// function load(parameterId) {
//
//     let obj = clone(Data.Lifestyle);
//     obj["parameterId"] = parameterId;
//
//     if (cache.length !== 0 ) {
//         for (let i of cache) {
//             if (i.parameterId === parameterId) {
//                 obj = clone(i);
//             }
//         }
//     }
//     return obj;
// }

function load(parameterId, course) {

    let obj = clone(Data.Lifestyle);
    obj["parameterId"] = parameterId;
    obj["course"] = course;

    if (filteredCache.length !== 0 ) {
        for (let i of filteredCache) {
            if (i.parameterId === parameterId) {
                obj = clone(i);
            }
        }
    }

    console.log(obj);

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