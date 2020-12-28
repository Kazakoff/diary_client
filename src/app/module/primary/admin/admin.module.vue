<template>
    <div id="admin" class="view">

        <div class="left-sidebar">

            <router-link to="/university" v-if="root" v-bind:class="{ isUniversity: isUniversity() }">
                {{ msg.university }}
            </router-link>

            <router-link to="/admin_user" v-if="root" v-bind:class="{ isAdminUser: isAdminUser() }">
                {{ msg.admins }}
            </router-link>

            <router-link to="/student_user" v-bind:class="{ isStudentUser: isStudentUser() }">
                {{ msg.students }}
            </router-link>

            <router-link to="/teacher_user" v-bind:class="{ isTeacherUser: isTeacherUser() }">
                {{ msg.teachers }}
            </router-link>

        </div>

        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script src="./admin.module.js"></script>

<style>

    /* NAVIGATION */

    .isUniversity {
        border-left: 3px solid #10382b;
    }
    .isAdminUser {
        border-left: 3px solid #10382b;
    }
    .isStudentUser {
        border-left: 3px solid #10382b;
    }
    .isTeacherUser {
        border-left: 3px solid #10382b;
    }

</style>