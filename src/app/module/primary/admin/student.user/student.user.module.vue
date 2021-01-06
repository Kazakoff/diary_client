<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="student-user" class="view">

        <p style="font-size: 24px; font-weight: bold;">{{ msg.students }}</p>

        <div class="admin-panel">
            <div>
                <input class="uk-input search" type="text" v-model="searchString"/>
            </div>
            <div>
                <button class="mui-btn mui-btn--raised" @click="showModal">{{ msg.add }}</button>
                <button class="mui-btn mui-btn--raised mui-btn--danger" @click="showRemoveModal" v-if="idList.length !== 0">{{ msg.delete }}</button>
            </div>
        </div>

        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped uk-table-hover uk-table-small">
            <thead>
                <tr>
                    <th></th>
                    <th>{{ msg.id }}</th>
                    <th>{{ msg.first_name }}</th>
                    <th>{{ msg.middle_name }}</th>
                    <th>{{ msg.last_name }}</th>
                    <th>{{ msg.nationality }}</th>
                    <th>{{ msg.gender }}</th>
                    <th>{{ msg.birth_date }}</th>
                    <th>{{ msg.birth_place }}</th>
                    <th>{{ msg.school }}</th>
                    <th>{{ msg.address }}</th>
                    <th>{{ msg.medical_group }}</th>
                    <th>{{ msg.diagnosis }}</th>
                    <th>{{ msg.student_number }}</th>
                    <th>{{ msg.course }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users()">
                    <td><input type="checkbox" v-bind:value="user.id" v-model="idList"></td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.middleName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.nationality }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.birthDate }}</td>
                    <td>{{ user.birthPlace }}</td>
                    <td>{{ user.school }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.medicalGroup }}</td>
                    <td>{{ user.diagnosis }}</td>
                    <td>{{ user.studentNumber }}</td>
                    <td>{{ user.course }}</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div class="c-modal-wrapper" v-show="removeModal">
            <div class="c-modal-background"></div>
            <div class="c-modal">
                <div class="c-modal-header"></div>
                <div class="c-modal-body">
                    <div>{{ msg.delete_msg }}</div>
                </div>
                <div class="c-modal-footer">
                    <button class="mui-btn mui-btn--danger" @click="remove">{{ msg.delete }}</button>
                    <button class="mui-btn mui-btn--primary" style="background: #4d759a;" @click="hideRemoveModal">{{ msg.cancel }}</button>
                </div>
            </div>
        </div>

        <div class="admin-modal-wrapper" v-show="modal">
            <div class="admin-modal-background" @click="hideModal"></div>
            <div class="admin-modal">

                <div class="c-close" @click="hideModal"></div>

                <div class="admin-modal-header"></div>

                <div class="admin-modal-body">

                    <div>
                        <label>{{ msg.username }}</label>
                        <input type="text" v-model="registrationDetails.username" class="uk-input"/>
                    </div>
                    <div v-if="usernameError !== null">
                        <span style="font-size: 10px; color: red;" v-if="usernameError === 'exists'">
							{{ msg.exists_username }}
						</span>
                        <span style="font-size: 10px; color: red;" v-if="usernameError === 'invalid'">
							{{ msg.incorrect_username }}
						</span>
                    </div>

                    <div>
                        <label>{{ msg.password }}</label>
                        <input type="text" v-model="registrationDetails.password" class="uk-input"/>
                    </div>
                    <div v-if="passwordError !== null"><span style="font-size: 10px; color: red;">{{ msg.incorrect_password }}</span></div>

                    <div>
                        <label>{{ msg.first_name }}</label>
                        <input type="text" v-model="registrationDetails.firstName" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.middle_name }}</label>
                        <input type="text" v-model="registrationDetails.middleName" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.last_name }}</label>
                        <input type="text" v-model="registrationDetails.lastName" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.student_number }}</label>
                        <input type="text" v-model="registrationDetails.studentNumber" class="uk-input"/>
                    </div>

                </div>

                <div class="admin-modal-footer">
                    <button class="mui-btn mui-btn--raised" @click="commit">{{ msg.add }}</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script src="./student.user.module.js"></script>

<style>

    .c-close {
        display: inline-block;
        width: 20px; height: 20px;
        position: absolute;  top: 5px;  right: 5px;
        cursor: pointer;
    }
    .c-close::before,
    .c-close::after {
        display: block;
        content: "";
        width: 5%;
        height: 80%;
        background-color: #585858;
        position: absolute;
        top: calc(50% - 40%);
        right: calc(50% - 5%);
        transform-origin: 50% 50%;
    }
    .c-close::before {
        transform: rotate(-45deg);
    }
    .c-close::after {
        transform: rotate(45deg);
    }

    .c-modal-background {
        z-index: 1;
        position: fixed; top: 0; left: 0; bottom: 0; right: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .c-modal {
        z-index: 2;
        position: fixed; top: 150px;  left: calc(50% - 275px);
        background: #87c1cc; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        width: 550px; height: auto;
    }
    .c-modal-header {
        width: 100%; height: 30px;
        background: #87c1cc;
    }
    .c-modal-body {
        width: 500px;
        margin: 0 auto;
    }
    .c-modal-footer {
        padding-left: 20px;
        padding-bottom: 20px;
    }

</style>