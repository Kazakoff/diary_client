<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="profile" class="view">
        <p style="font-size: 24px; font-weight: bold;">{{ msg.profile }}</p>

        <div class="profile-content">

            <!--TODO IF STUDENT-->
            <div v-if="auth === 'ROLE_STUDENT'">
                <p>
                    <label>{{ msg.first_name }}: </label>
                    <input type="text" v-model="profile.firstName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.middle_name }}: </label>
                    <input type="text" v-model="profile.middleName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.last_name }}: </label>
                    <input type="text" v-model="profile.lastName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.nationality }}: </label>
                    <input type="text" v-model="profile.nationality" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.gender }}: </label>
                    <select v-model="profile.gender" class="uk-select">
                        <option v-for="gender in genders" v-bind:value="gender.id">{{ gender.name }}</option>
                    </select>
                </p>

                <p>
                    <label>{{ msg.birth_date }}: </label>
                    <input type="date" v-model="profile.birthDate" class="uk-input"/>
                </p>

               <p>
                   <label>{{ msg.birth_place }}: </label>
                   <input type="text" v-model="profile.birthPlace" class="uk-input"/>
               </p>

                <p>
                    <label>{{ msg.school }}: </label>
                    <input type="text" v-model="profile.school" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.address }}: </label>
                    <input type="text" v-model="profile.address" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.medical_group }}: </label>
                    <input type="text" v-model="profile.medicalGroup" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.diagnosis }}: </label>
                    <input type="text" v-model="profile.diagnosis" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.student_number }}: </label>
                    <input type="text" v-model="profile.studentNumber" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.course }}</label>
                    <select v-model="profile.course" class="uk-select">
                    <option v-for="course in courses" v-bind:value="course">{{ course }}</option>
                    </select>
                </p>

                <p>
                    <label>{{ msg.group }}</label>
                    <select v-model="groupId" class="uk-select">
                        <option v-for="group in groups" v-bind:value="group.id">{{ group.name }}</option>
                    </select>
                </p>

                <button class="mui-btn mui-btn--raised mui-btn--primary" style="background: #10382b;" @click="commitStudent">{{ msg.edit }}</button>

            </div>

            <!--TODO IF TEACHER-->
            <div v-if="auth === 'ROLE_TEACHER'">

                <p>
                    <label>{{ msg.first_name }}: </label>
                    <input type="text" v-model="profile.firstName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.middle_name }}: </label>
                    <input type="text" v-model="profile.middleName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.last_name }}: </label>
                    <input type="text" v-model="profile.lastName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.phone }}: </label>
                    <input type="text" v-model="profile.phone" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.post }}: </label>
                    <input type="text" v-model="profile.post" class="uk-input"/>
                </p>

                <button class="mui-btn mui-btn--raised mui-btn--primary" style="background: #10382b;" @click="commitTeacher">{{ msg.edit }}</button>

            </div>

            <!--TODO IF ADMIN-->
            <div v-if="auth === 'ROLE_ADMIN' || auth === 'ROLE_ROOT_ADMIN'">

                <p>
                    <label>{{ msg.first_name }}: </label>
                    <input type="text" v-model="profile.firstName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.middle_name }}: </label>
                    <input type="text" v-model="profile.middleName" class="uk-input"/>
                </p>

                <p>
                    <label>{{ msg.last_name }}: </label>
                    <input type="text" v-model="profile.lastName" class="uk-input"/>
                </p>

                <button class="mui-btn mui-btn--raised mui-btn--primary" style="background: #10382b;" @click="commitAdmin">{{ msg.edit }}</button>

            </div>
        </div>

    </div>
</template>

<script src="./profile.module.js"></script>

<style>
    #profile {
        position: fixed; top: 60px; left: 10px; right: 10px; bottom: 70px;
        background: #93adc5; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        overflow-x: auto;
    }
    .profile-content {
        width: 700px;
        margin: 0 auto;
    }
    .profile-content p{
        display: flex;
    }
    .profile-content label {
        display: block;
        font-size: 16px;
        font-weight: bold;
        width: 30%;
    }
    .profile-content input,
    .profile-content select {
        width: 70%;
    }
</style>