import Navigation from  "../../../service/navigation.service";

export default {

    name: "RuleModule",

    data: function() {
        return {}
    },

    computed: {
        msg() { return this.$store.state.locale; },
    },

    beforeRouteEnter (to, from, next) {

        Navigation.settings.isHome = false;
        Navigation.settings.isProfile = false;
        Navigation.settings.isAbout = false;
        Navigation.settings.isSchedule = false;
        Navigation.settings.isRule = true;

        next(true);
    },

    methods: {}

};