<template>
    <div id="teacher">

        <div class="left-sidebar">

            <router-link to="/search" v-bind:class="{ isSearch: isSearch() }">
                {{ msg.search }}
            </router-link>

            <router-link to="/students" v-bind:class="{ isStudents: isStudents() }">
                {{ msg.students }}
            </router-link>

        </div>

        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script src="./teacher.module.js"></script>

<style>
    .isSearch {
        border-left: 3px solid #16193B;
    }
    .isStudents {
        border-left: 3px solid #16193B;
    }
</style>