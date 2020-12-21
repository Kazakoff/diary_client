<template>
    <div id="student">
        
        <div class="left-sidebar">

            <router-link to="/teachers" v-bind:class="{ isTeachers: isTeachers() }">
                {{ msg.teachers }}
            </router-link>

            <router-link to="/control_exercise" v-bind:class="{ isControlExercise: isControlExercise() }">
                {{ msg.control_exercise.name }}
            </router-link>

            <router-link to="/lifestyle" v-bind:class="{ islifestyle: islifestyle() }">
                {{ msg.lifestyle.name }}
            </router-link>

            <router-link to="/physical_development" v-bind:class="{ isPhysicalDevelopment: isPhysicalDevelopment() }">
                {{ msg.physical_development.name }}
            </router-link>

            <router-link to="/physical_fitness" v-bind:class="{ isPhysicalFitness: isPhysicalFitness() }">
                {{ msg.physical_fitness.name }}
            </router-link>

        </div>

        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script src="./student.module.js"></script>

<style>
    .isControlExercise {
        border-left: 3px solid #16193B;
    }
    .islifestyle {
        border-left: 3px solid #16193B;
    }
    .isPhysicalDevelopment {
        border-left: 3px solid #16193B;
    }
    .isPhysicalFitness {
        border-left: 3px solid #16193B;
    }
    .isTeachers {
        border-left: 3px solid #16193B;
    }
</style>