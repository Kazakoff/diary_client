import { getToken, getUserId } from "../../../../service/token.service";
import { isUnauthorized } from "../../../../service/http.service";
import { clone } from "../../../../utils/utils";
import Navigation from "../../../../service/navigation.service";
import { searchByFullName } from "../../../../service/search.service";

import Data from "./data/data";

import Vue from "vue";

let LOAD_ADDED_STUDENTS_URL = "http://localhost:8070/teacher/load/added/students/";
let DELETE_ADDED_STUDENT_URL = "http://localhost:8070/teacher/remove/student/from/teacher/";

let LOAD_PHYSICAL_DEVELOPMENTS_URL = "http://localhost:8070/student/load/physical/developments/";
let CREATE_OR_UPDATE_PHYSICAL_DEVELOPMENT_URL = "http://localhost:8070/student/add/or/modify/physical/development";
let DELETE_PHYSICAL_DEVELOPMENT_URL = "http://localhost:8070/student/remove/physical/development/";

let LOAD_PHYSICAL_FITNESS_URL = "http://localhost:8070/student/load/physical/fitness/";
let CREATE_OR_UPDATE_PHYSICAL_FITNESS_URL = "http://localhost:8070/student/add/or/modify/physical/fitness";
let DELETE_PHYSICAL_FITNESS_URL = "http://localhost:8070/student/remove/physical/fitness/";

let LOAD_LIFESTYLE_URL = "http://localhost:8070/student/load/lifestyle/";
let CREATE_OR_UPDATE_LIFESTYLE_URL = "http://localhost:8070/student/add/or/modify/lifestyle";
let DELETE_LIFESTYLE_URL = "http://localhost:8070/student/remove/lifestyle/";

let LOAD_CONTROL_EXERCISES_URL = "http://localhost:8070/student/load/control/exercises/";
let CREATE_OR_UPDATE_CONTROL_EXERCISES_URL = "http://localhost:8070/student/add/or/modify/control/exercise";
let DELETE_CONTROL_EXERCISES_URL = "http://localhost:8070/student/remove/control/exercise/";

let LOAD_URL = null;
let CREATE_OR_UPDATE_URL = null;
let DELETE_URL = null;

let cache = []; // TODO data from server
let objs = [];

export default {

    name: "StudentsModule",

    data: function() {
        return {
            // students: cache,
            modal: false,
            removeModal: false,
            stId: null,
            typeId: 1,
            obj: clone(Data.PhysicalDevelopment),
            student: null,
            searchString: "",
            // TODO FOR CHARTS
            chartsModal: false,
            columns: [],
            rows: [],
            options: {
                title: "",
                hAxis: { title: "", },
                vAxis: { title: "", },
                width: 900,
                height: 500,
                curveType: "function",
                pointSize: 5,
                colors: ["#16193b"],
            },
            courses: [1, 2, 3, 4]
        }
    },

    computed: {
        msg() { return this.$store.state.locale; },
        types() { return this.$store.state.locale.types; },
        parameters() {
            let parameters;
            if (this.typeId === 1) {
                parameters = this.$store.state.locale.physical_development.parameters;
                this.obj = clone(Data.PhysicalDevelopment);
            } else if (this.typeId === 2) {
                parameters = this.$store.state.locale.physical_fitness.parameters;
                this.obj = clone(Data.PhysicalFitness);
            } else if (this.typeId === 3) {
                parameters = this.$store.state.locale.lifestyle.parameters;
                this.obj = clone(Data.Lifestyle);
            } else {
                parameters = this.$store.state.locale.control_exercise.parameters;
                this.obj = clone(Data.ControlExercise);
            }
            return parameters;
        },
        students() {
            for (let i of cache) {
                if (i.birthDate !== null) {
                    i.birthDate = new Date(i.birthDate).toISOString().slice(0, 10);
                }

                for (let g of this.$store.state.locale.genders) {
                    if (i.gender !== null && i.gender === g.id) {
                        i.gender = g.name;
                    }
                }
            }
            return searchByFullName(this.searchString, cache);
        }
    },

    beforeRouteEnter (to, from, next) {
        Vue.http.get(LOAD_ADDED_STUDENTS_URL + getUserId(), {
            headers: { "X-Authorization": getToken() }
        })
            .then(
                (response) => {
                    cache = response.body;
                    console.log("RESPONSE FROM SERVER. ADDED STUDENT CACHE: ", cache);

                    Navigation.teacher.isSearch = false;
                    Navigation.teacher.isStudents = true;

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

        showRemoveModal(stId) {
            this.stId = stId;
            this.removeModal = !this.removeModal;
        },
        hideRemoveModal() {
            this.removeModal = false;
        },

        showModal(student) {
            this.student = clone(student);
            this.load();
            this.modal = !this.modal;
        },
        hideModal() {
            this.modal = false;
        },
        load() {
            this.constractUrls();
            console.log("LOAD_URL: ", LOAD_URL + this.student.id);
            this.$http.get(LOAD_URL + this.student.id, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        objs = response.body;
                        console.log("OBJS: ", objs);
                        this.reload();
                        console.log("*** OBJ *** ", this.obj);
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },
        constractUrls() {
            if (this.typeId === 1) {
                LOAD_URL = LOAD_PHYSICAL_DEVELOPMENTS_URL;
                CREATE_OR_UPDATE_URL = CREATE_OR_UPDATE_PHYSICAL_DEVELOPMENT_URL;
                DELETE_URL = DELETE_PHYSICAL_DEVELOPMENT_URL;
            } else if (this.typeId === 2) {
                LOAD_URL = LOAD_PHYSICAL_FITNESS_URL;
                CREATE_OR_UPDATE_URL = CREATE_OR_UPDATE_PHYSICAL_FITNESS_URL;
                DELETE_URL = DELETE_PHYSICAL_FITNESS_URL;
            } else if (this.typeId === 3) {
                LOAD_URL = LOAD_LIFESTYLE_URL;
                CREATE_OR_UPDATE_URL = CREATE_OR_UPDATE_LIFESTYLE_URL;
                DELETE_URL = DELETE_LIFESTYLE_URL;
            } else {
                LOAD_URL = LOAD_CONTROL_EXERCISES_URL;
                CREATE_OR_UPDATE_URL = CREATE_OR_UPDATE_CONTROL_EXERCISES_URL;
                DELETE_URL = DELETE_CONTROL_EXERCISES_URL;
            }
        },
        reload() {
            this.obj = this.read(this.obj.parameterId);
            this.updateChart();
        },
        formObj() {
            if (this.typeId === 1) {
                return clone(Data.PhysicalDevelopment);
            } else if (this.typeId === 2) {
                return clone(Data.PhysicalFitness);
            } else if (this.typeId === 3) {
                return clone(Data.Lifestyle);
            } else {
                return clone(Data.ControlExercise);
            }
        },
        read(parameterId) {
            console.log("PARAMETER ID: ", parameterId);
            let obj = this.formObj();
            obj["parameterId"] = parameterId;

            if (this.typeId === 3) {
                obj["course"] = this.obj.course;
                console.log("OBJ => ", obj);
                let filtered = [];
                for (let i of objs) {
                    if (i.course === this.obj.course) {
                        filtered.push(i);
                    }
                }
                if (filtered.length !== 0) {
                    for (let i of filtered) {
                        if (i.parameterId === parameterId) {
                            obj = clone(i);
                        }
                    }
                }
                return obj;
            }

            if (objs.length !== 0 ) {
                for (let i of objs) {
                    if (i.parameterId === parameterId) {
                        obj = clone(i);
                    }
                }
            }
            return obj;
        },

        edit() {
            this.obj["studentId"] = this.student.id;
            console.log("EDIT STUDENT WITH ID: ", this.student.id);
            console.log("OBJ: ", this.obj);

            this.$http.post(CREATE_OR_UPDATE_URL, this.obj, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        put(response.body);
                        // if (this.obj.id === null) {
                        //     this.reload();
                        // }
                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );

        },
        remove() {
            console.log("*** REMOVE ***");
            console.log("OBJS: ", objs);
            console.log("OBJ: ", this.obj);
            let currentParameterId = this.obj.parameterId;

            if (this.obj.id !== null) {
                this.$http.delete(DELETE_URL + this.obj.id, {
                    headers: { "X-Authorization": getToken() }
                })
                    .then(
                        (response) => {
                            pull(response.body);
                            this.obj = this.formObj();
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

        removeAddedStudent() {

            console.log("REMOVE ADDED STUDENT WITH ID: ", this.stId);
            this.$http.delete(DELETE_ADDED_STUDENT_URL + this.stId, {
                headers: { "X-Authorization": getToken() }
            })
                .then(
                    (response) => {
                        console.log("STUDENT REMOVED. ID: ", response.body);

                        for (let i of cache) {
                            if (i.id === response.body) {
                                let index = cache.indexOf(i);
                                cache.splice(index, 1);
                            }
                        }

                        this.hideRemoveModal();

                    },
                    (response) => {
                        if (isUnauthorized(response)) {
                            this.$router.push("/authentication");
                        }
                    }
                );
        },

        // TODO CHARTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        showChartsModal(student) {
            this.student = clone(student);
            this.load();
            this.chartsModal = !this.chartsModal;
        },
        hideChartsModal() {
            this.chartsModal = false;
        },
        updateChart() {
            console.log("CHART UPDATING...");
            this.columns = [];
            this.rows = [];
            this.columns.push({ "type": "string", "label": "" });
            this.columns.push({ "type": "number", "label": "" });

            for (let type of this.types) {
                if (type.id === this.typeId) {
                    this.options.title = type.name;
                }
            }
            for (let parameter of this.parameters) {
                if (parameter.id === this.obj.parameterId) {
                    this.columns[1].label = parameter.name;
                }
            }
            
            if (this.typeId === 1 || this.typeId === 2) {
                this.rows.push([this.msg.first_course_beginning, parseFloat(this.obj.firstCourseBeginning)]);
                this.rows.push([this.msg.semester_1, parseFloat(this.obj.semester1)]);
                this.rows.push([this.msg.semester_2, parseFloat(this.obj.semester2)]);
                this.rows.push([this.msg.second_course_beginning, parseFloat(this.obj.secondCourseBeginning)]);
                this.rows.push([this.msg.semester_3, parseFloat(this.obj.semester3)]);
                this.rows.push([this.msg.semester_4, parseFloat(this.obj.semester4)]);
                this.rows.push([this.msg.third_course_beginning, parseFloat(this.obj.thirdCourseBeginning)]);
                this.rows.push([this.msg.semester_5, parseFloat(this.obj.semester5)]);
                this.rows.push([this.msg.semester_6, parseFloat(this.obj.semester6)]);
                this.rows.push([this.msg.fourth_course_beginning, parseFloat(this.obj.fourthCourseBeginning)]);
                this.rows.push([this.msg.semester_7, parseFloat(this.obj.semester7)]);
                this.rows.push([this.msg.semester_8, parseFloat(this.obj.semester8)]);
            } 
            if (this.typeId === 4) {

                this.columns.push({ "type": "number", "label": this.msg.rating });

                this.rows.push([
                    this.msg.first_course_beginning, 
                    parseFloat(this.obj.firstCourseBeginningResult),
                    parseFloat(this.obj.firstCourseBeginningRating)
                ]);
                this.rows.push([
                    this.msg.semester_1, 
                    parseFloat(this.obj.semester1Result),
                    parseFloat(this.obj.semester1Rating)
                ]);
                this.rows.push([
                    this.msg.semester_2, 
                    parseFloat(this.obj.semester2Result),
                    parseFloat(this.obj.semester2Rating)
                ]);
                this.rows.push([
                    this.msg.second_course_beginning, 
                    parseFloat(this.obj.secondCourseBeginningResult),
                    parseFloat(this.obj.secondCourseBeginningRating)
                ]);
                this.rows.push([
                    this.msg.semester_3, 
                    parseFloat(this.obj.semester3Result),
                    parseFloat(this.obj.semester3Rating)
                ]);
                this.rows.push([
                    this.msg.semester_4, 
                    parseFloat(this.obj.semester4Result),
                    parseFloat(this.obj.semester4Rating)
                ]);
                this.rows.push([
                    this.msg.third_course_beginning, 
                    parseFloat(this.obj.thirdCourseBeginningResult),
                    parseFloat(this.obj.thirdCourseBeginningRating)
                ]);
                this.rows.push([
                    this.msg.semester_5, 
                    parseFloat(this.obj.semester5Result),
                    parseFloat(this.obj.semester5Rating)
                ]);
                this.rows.push([
                    this.msg.semester_6, 
                    parseFloat(this.obj.semester6Result),
                    parseFloat(this.obj.semester6Rating)
                ]);
            }
        }
    }
};

function put(obj) {
    for (let i of objs) {
        if (i.id === obj.id) {
            let index = objs.indexOf(i);
            objs.splice(index, 1);
        }
    }
    objs.push(obj);
}

function pull(id) {
    for (let i of objs) {
        if (i.id === id) {
            let index = objs.indexOf(i);
            objs.splice(index, 1);
        }
    }
}