import { setToken, getToken, setAuthority, getAuthority, setUserId, getUserId } from "../../service/token.service";

export default {
    name: "AuthenticationModule",
    data: function() {
        return {
            details: {
                username: null,
                password: null
            },
            selectedLocale: this.$store.state.selectedLocale,
            locales: [
                { name: "En", value: "en" },
                { name: "Ru", value: "ru" }
            ],
            error: false
        }
    },
    computed: {
        msg() { return this.$store.state.locale; }
    },
    beforeRouteEnter (to, from, next) { next(true); },
    methods: {
        authenticate: function() {
            this.$http.post("http://localhost:8070/authenticate", this.details).then(
                    function(response) {
                        setToken(response.body.token);
                        setAuthority(response.body.authorities[0]);
                        setUserId(response.body.userId);
                        this.hideError();
                        this.$router.push("/primary");
                    },
                    function(error) {
                        this.showError();
                    }
                );
        },
        changeLocale: function() {
            this.$store.commit("changeLocale", this.selectedLocale);
        },

        showError() {
            this.error = !this.error;
        },
        hideError() {
            this.error = false;
        },

    },
};