<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="admin-user" class="view">
        <p style="font-size: 24px; font-weight: bold;">{{ msg.admins }}</p>

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
                    <th></th>
                    <th>{{ msg.id }}</th>
                    <th>{{ msg.first_name }}</th>
                    <th>{{ msg.middle_name }}</th>
                    <th>{{ msg.last_name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users()">
                    <td><input type="checkbox" v-bind:value="user.id" v-model="idList"></td>
                    <td><img class="icon icons8-Ключ" width="16" height="16" v-bind:title="msg.root_admin" v-if="user.authority === 'ROLE_ROOT_ADMIN'" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADAElEQVRoQ+2ZTXLaQBCFXwvv41QMJVZJThC8i8XC9gninMDmBOEI5AbkBOATGJ/AeIGcnckJwk4q5FThPdCpEVaKSBppRj8YqtC6Z6a/ftM9PSPCjn+04/5jD/DaCmZSoFq1GjigSzAaID4kUEOAMHgMphkIY8z52vPscdmAWgBVs3lJ4A6IPig5xjxhUMdzR9dK9hmMlABWEUcviLTuOr4yc7TKUCQV4F3t5MKoGD0CDnUdX7dnYLZcLFt/pg+DPPOExyYCCOcrFeOmyAWXvDh/cn8Oi5pTCvCSqHd5Ix92VCiBOZ8XtZ3kAHXrMX7P8+2Sl90gikfm5zODjDZAX1SjKnLCc+xjVfsku1iAqmldEVEvEj3mlufa/bgJZWNki3PCXDpgsQA10/odLZV8O3Xsi6TJa3VroKwE82Tq2h91nI2zjQCIvU8H9Bg2Vkm+1Xaq3Kk6xXM+zpsLUYC61SXQt7ATU2eUWnLFmFq9ycoA4B+eY7dV7dUUMK0hEZ1uBID53nPts2IBJNWnlC1UQDWKbAv5FuDB1LG/piTxDUCJiZ5VWdm6GgBAUunTLaOBQ6q5pQxQrTfHBHySR5oHS+buk/twL2yOzJNTg0gcZFqRF2MZ+OU5I78Vz/pFq5AkibMukDSOS0ri2DJaBgCYv09du5NnbuWDLM8i0naijIPMP4xMawKi92U4vT4nM/c9127lWUermcuzkFSFnBAJ7XRaNSoOJ48SyReaCkRb8aY4VxOKc0YlNn6lTCmr2jmR2mH6l3qD+tuqRCqAiNjL/biffEIXt9F0ckIJIHDN73cA8bC1NSVWC+AfyOqh62r1tEiHgTKitwHzjIAhLzBABY24u7WqVipKZAJQdcDffpIHAtU50iBKBygbYiMAcdHWuTv7rbfknNgZAD8IMd3rTgGIZ0nPGb1dV3SnAITj4SvoqwGE80I1J/YAqvVb126vgG7EirZXObGZ+dlz7f9+dW1NEgcnNoBuXOsunAfQDv+f2CqALKruAbJErcgxO6/AXwyXekDvBUvVAAAAAElFTkSuQmCC"/></td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.middleName }}</td>
                    <td>{{ user.lastName }}</td>
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
                    <button class="mui-btn mui-btn--primary" style="background: #10382b;" @click="hideRemoveModal">{{ msg.cancel }}</button>
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
                    <label style="margin-left: 20px; margin-right: 10px;">{{ msg.root }}</label>
                    <input type="checkbox" v-model="root"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script src="./admin.user.module.js"></script>