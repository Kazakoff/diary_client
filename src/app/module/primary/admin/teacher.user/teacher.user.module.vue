<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="teacher-user" class="view">

        <p style="font-size: 24px; font-weight: bold;">{{ msg.teachers }}</p>

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
                    <th>{{ msg.phone }}</th>
                    <th>{{ msg.post }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users()">
                    <td><input type="checkbox" v-bind:value="user.id" v-model="idList"></td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.middleName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.post }}</td>
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
                    <button class="mui-btn mui-btn--primary" style="background: #16193b;" @click="hideRemoveModal">{{ msg.cancel }}</button>
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
                </div>
                <div class="admin-modal-footer">
                    <button class="mui-btn mui-btn--raised" @click="commit">{{ msg.add }}</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script src="./teacher.user.module.js"></script>