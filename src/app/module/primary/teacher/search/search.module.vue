<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="search" class="view">

        <p style="font-size: 24px; font-weight: bold;">{{ msg.search }}</p>

        <div class="admin-panel">
            <div>
                <input class="uk-input search" type="text" v-model="searchString"/>
            </div>
        </div>

        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped uk-table-hover uk-table-small">
                <thead>
                    <tr>
                        <th></th>
                        <th>{{ msg.first_name }}</th>
                        <th>{{ msg.middle_name }}</th>
                        <th>{{ msg.last_name }}</th>
                        <th>{{ msg.student_number }}</th>
                        <th>{{ msg.course }}</th>
                        <th>{{ msg.group }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in students">
                        <td>
                            <span style="cursor:pointer; display: inline-block; width: 30px;" @click="showAddModal(student.id)">
                                <img v-bind:title="msg.add" uk-tooltip class="icon icons8-Добавить-пользователя" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACSUlEQVRoQ+1YzU7CQBCeAdGol15q5AZPIN4MHIQnMT6B+ga8gfgExicBDxBv4hPADWIvvahRhHW2tWAqdn/arSHZPRCS7szO930zs9MibPjCDY8fLID/VtAqYBVIyYBNIVkCncOTSgmLFwCsiYA1bseADQGwN2PzG3/6MJb19XNfLgq45cY1HXSZFCAD6HiT/pUqCOMA3HL9MWJcFBxXxJsMjkX7clOAgu9Q8JQ28otA3BCIRLVyAcBzfhuLI/nQVzs/2LwqWxPGUkiH/QiCigpCAAflBtXXaj1P+kIbvlsl9+MqqdSCMBhdAHE71VSSJcoC+ItZ6v1DYudIlfnwgoMnuhOCy060jCmw8UWcexs1UXQ6Kqi0UJ5eyxQyASBsp/K1oJL7UW0YB/B9JwhHClXmcwXADwvH6QLNOEjjdNidOOP0S+P0oiM7OsS7krEuJGp/WT23ALJiUtePVSCJOcepOcWdvdNCAZtUscFogMAqgFgJ7BgbM8Bx8B9huFiw3vz99d73h76sIkYUcA8bZ4DsUvZVMh5s8LLPsONN+3ciIEIAIgc/n/PAieH2kmEV43V7Q4XaSUAyARD0eCjeIkIzbczrcUBvBvPzdXdFagCuW6/BFnbJkWMi+MgnXXo+fLKW5w3oW9JqpQKQV/BJILQB8A5T2t0fmWb+d4GDP3t7qUadShsAFWzXVM6LUpEx6FFht8Luq7nSjt+axy7Nopd+CyAtk7r2VgFd5rK2066BrAPR9WcB6DKXlZ1VICsmdf1YBXSZy8ruC4OFGUCDJOgLAAAAAElFTkSuQmCC"/>
                            </span>
                        </td>
                        <td>{{ student.firstName }}</td>
                        <td>{{ student.middleName }}</td>
                        <td>{{ student.lastName }}</td>
                        <td>{{ student.studentNumber }}</td>
                        <td>{{ student.course }}</td>
                        <td>{{ student.facultyGroup.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="c-modal-wrapper" v-show="addModal">
            <div class="c-modal-background"></div>
            <div class="c-modal">
                <div class="c-modal-header"></div>
                <div class="c-modal-body">
                    <div>{{ msg.ad_msg }}</div>
                </div>
                <div class="c-modal-footer">
                    <button class="mui-btn mui-btn--danger" @click="add">{{ msg.add }}</button>
                    <button class="mui-btn mui-btn--primary" style="background: #16193b;" @click="hideAddModal">{{ msg.cancel }}</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script src="./search.module.js"></script>

<style></style>