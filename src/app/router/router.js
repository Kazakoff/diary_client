import Vue from "vue";
import VueRouter from "vue-router";

/**
 * THE SECURITY MODULES
 */
import AuthenticationModule from "../module/authentication/authentication.module.vue";

/**
 * THE ROOT MODULE FOR THE STUDENT AND TEACHER MODULES
 */
import PrimaryModule from "../module/primary/primary.module.vue";

/**
 * THE STUDENT MODULE
 */
import StudentModule from "../module/primary/student/student.module.vue";

import ControlExerciseModule from "../module/primary/student/control.exercise/control.exercise.module.vue";
import LifestyleModule from "../module/primary/student/lifestyle.module/lifestyle.module.vue";
import PhysicalDevelopmentModule from "../module/primary/student/physical.development/physical.development.module.vue";
import PhysicalFitnessModule from "../module/primary/student/physical.fitness/physical.fitness.module.vue";

import TeachersModule from "../module/primary/student/teachers/teachers.module.vue";
/**
 * THE TEACHER MODULE
 */
import TeacherModule from "../module/primary/teacher/teacher.module.vue";
import SearchModule from "../module/primary/teacher/search/search.module.vue";
import StudentsModule from "../module/primary/teacher/students/students.module.vue";
/**
 * THE ADMIN MODULE
 */
import AdminModule from "../module/primary/admin/admin.module.vue";
import UniversityModule from "../module/primary/admin/university/university.module.vue";
import AdminUserModule from "../module/primary/admin/admin.user/admin.user.module.vue";
import StudentUserModule from "../module/primary/admin/student.user/student.user.module.vue";
import TeacherUserModule from "../module/primary/admin/teacher.user/teacher.user.module.vue";
/**
 * THE COMMON MODULES
 */
import ProfileModule from "../module/primary/profile/profile.module.vue";
import AboutModule from "../module/primary/about/about.module.vue";
import ScheduleModule from "../module/primary/schedule/schedule.module.vue";
import RuleModule from "../module/primary/rule/rule.module.vue";

/**
 * THE SERVICES
 */
import { getToken } from "../service/token.service";
import { getPath, getHomePath } from "../service/path.service";

Vue.use(VueRouter);

module.exports = new VueRouter({
  routes: [
      {
          path: "/",
          redirect: to => {
              if (getToken() != null) {
                  return "/primary";
              } else {
                  return "/authentication"
              }
          }
      },

      {
          path: "/primary",
          redirect: to => {
              return getPath();              
          },
          name: "PrimaryModule",
          component: PrimaryModule,
          children: [

              {
                  path: "/student",
                  redirect: to => {
                      return getHomePath();
                  },
                  name: "StudentModule",
                  component: StudentModule,
                  children: [
                      { path: "/control_exercise", name: "ControlExerciseModule", component: ControlExerciseModule },
                      { path: "/lifestyle", name: "LifestyleModule", component: LifestyleModule },
                      { path: "/physical_development", name: "PhysicalDevelopmentModule", component: PhysicalDevelopmentModule },
                      { path: "/physical_fitness", name: "PhysicalFitnessModule", component: PhysicalFitnessModule },
                      { path: "/teachers", name: "TeachersModule", component: TeachersModule }
                  ]
              },
              {
                  path: "/teacher",
                  redirect: to => {
                      return getHomePath();
                  },
                  name: "TeacherModule",
                  component: TeacherModule,
                  children: [
                      { path: "/search", name: "SearchModule", component: SearchModule },
                      { path: "/students", name: "StudentsModule", component: StudentsModule }
                  ]
              },
              {
                  path: "/admin",
                  redirect: to => {
                      return getHomePath();
                  },
                  name: "AdminModule",
                  component: AdminModule,
                  children: [
                      { path: "/university", name: "UniversityModule", component: UniversityModule },
                      { path: "/admin_user", name: "AdminUserModule", component: AdminUserModule },
                      { path: "/student_user", name: "StudentUserModule", component: StudentUserModule },
                      { path: "/teacher_user", name: "TeacherUserModule", component: TeacherUserModule },
                  ]
              },

              { path: "/profile", name: "ProfileModule", component: ProfileModule },
              { path: "/about", name: "AboutModule", component: AboutModule },
              { path: "/schedule", name: "ScheduleModule", component: ScheduleModule },
              { path: "/rule", name: "RuleModule", component: RuleModule }

          ]
      },

      { path: "/authentication", name: "AuthenticationModule", component: AuthenticationModule },

      { path: "*", redirect: "/" },
  ]
});
