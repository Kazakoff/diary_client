import Navigation from "../../../service/navigation.service";

export default {

    name: "TeacherModule",

    data: function() {
        return {}
    },

    computed: {
        msg() {
            return this.$store.state.locale;
        }
    },

    beforeRouteEnter (to, from, next) {
        next(true);
    },

    methods: {
        isSearch() { return Navigation.teacher.isSearch; },
        isStudents() { return Navigation.teacher.isStudents; }
    }

};