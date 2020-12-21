import { removeToken, getToken, removeAuthority, getAuthority, remove } from "../../service/token.service";
import { getHomePath } from "../../service/path.service";
import Navigation from "../../service/navigation.service";

export default {
    name: "PrimaryModule",
    data: function() {
        return {
            settingsDrop: false,
            selectedLocale: this.$store.state.selectedLocale,
            locales: [
                { name: "En", value: "en" },
                { name: "Ru", value: "ru" }
            ]
        }
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
        showSettingsDrop: function () {
            this.settingsDrop = !this.settingsDrop;
        },
        hideSettingsDrop: function() {
            this.settingsDrop = false;
        },
        changeLocale: function() {
            this.$store.commit("changeLocale", this.selectedLocale);
        },
        exit: function() {

            Navigation.settings.isHome = false;
            Navigation.settings.isProfile = false;
            Navigation.settings.isAbout = false;
            Navigation.settings.isSchedule = false;
            Navigation.settings.isRule = false;

            remove();
            this.$router.push("/authentication");
        },
        redirectToDefaultView: function() {
            this.$router.push(getHomePath());
        },

        isHome() { return Navigation.settings.isHome; },
        isProfile() { return Navigation.settings.isProfile; },
        isAbout() { return Navigation.settings.isAbout; },
        isSchedule() { return Navigation.settings.isSchedule; },
        isRule() { return Navigation.settings.isRule; },

    }
};