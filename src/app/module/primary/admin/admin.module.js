import { getAuthority } from "../../../service/token.service";
import Navigation from "../../../service/navigation.service";

export default {
    name: "AdminModule",
    data: function() {
        return {
            // isUniversity: Navigation.admin.isUniversity,
            // isAdminUser: Navigation.admin.isAdminUser,
            // isStudentUser: Navigation.admin.isStudentUser,
            // isTeacherUser: Navigation.admin.isTeacherUser
        }

    },
    computed: {
        msg() { return this.$store.state.locale; },
        root() {
            return getAuthority() === "ROLE_ROOT_ADMIN";
        }
    },
    beforeRouteEnter (to, from, next) {
        next(true);
    },
    methods: {
        isUniversity() { return Navigation.admin.isUniversity },
        isAdminUser() { return Navigation.admin.isAdminUser },
        isStudentUser() { return Navigation.admin.isStudentUser },
        isTeacherUser() { return Navigation.admin.isTeacherUser }
    }
};