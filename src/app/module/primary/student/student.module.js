import Navigation from "../../../service/navigation.service";

export default {

    name: "StudentModule",

    data: function() {
        return {}
    },

    computed: {
        msg() { return this.$store.state.locale; }
    },

    beforeRouteEnter (to, from, next) {
        next(true);
    },

    methods: {
        isControlExercise() { return Navigation.student.isControlExercise; },
        islifestyle() { return Navigation.student.islifestyle; },
        isPhysicalDevelopment() { return Navigation.student.isPhysicalDevelopment; },
        isPhysicalFitness() { return Navigation.student.isPhysicalFitness; },
        isTeachers() { return Navigation.student.isTeachers; }
    }

};