import Navigation from  "../../../service/navigation.service";

export default {

    name: "AboutModule",

    data: function() {
        return {}
    },

    computed: {
        msg() { return this.$store.state.locale; },
    },

    beforeRouteEnter (to, from, next) {

        Navigation.settings.isHome = false;
        Navigation.settings.isProfile = false;
        Navigation.settings.isAbout = true;
        Navigation.settings.isSchedule = false;
        Navigation.settings.isRule = false;        

        next(true);
    },

    methods: {}

};