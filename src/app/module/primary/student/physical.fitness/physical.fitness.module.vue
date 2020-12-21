<template>
    <div id="physical-fitness" class="view">

        <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">{{ msg.physical_fitness.full_name }}</div>

        <button style="margin-bottom: 20px;" class="mui-btn mui-btn--raised" @click="showModal">{{ msg.add }}</button>

        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped uk-table-hover uk-table-small">
                <thead>
                <tr>
                    <th></th>

                    <th>{{ msg.first_course_beginning }}</th>
                    <th>{{ msg.semester_1 }}</th>
                    <th>{{ msg.semester_2 }}</th>
                    <th>{{ msg.second_course_beginning }}</th>
                    <th>{{ msg.semester_3 }}</th>
                    <th>{{ msg.semester_4 }}</th>
                    <th>{{ msg.third_course_beginning }}</th>
                    <th>{{ msg.semester_5 }}</th>
                    <th>{{ msg.semester_6 }}</th>
                    <th>{{ msg.fourth_course_beginning }}</th>
                    <th>{{ msg.semester_7 }}</th>
                    <th>{{ msg.semester_8 }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="displayedObj in displayedObjList()">
                    <td class="uk-table-expand">{{ displayedObj.name }}</td>

                    <td>{{ displayedObj.firstCourseBeginning }}</td>
                    <td>{{ displayedObj.semester1 }}</td>
                    <td>{{ displayedObj.semester2 }}</td>
                    <td>{{ displayedObj.secondCourseBeginning }}</td>
                    <td>{{ displayedObj.semester3 }}</td>
                    <td>{{ displayedObj.semester4 }}</td>
                    <td>{{ displayedObj.thirdCourseBeginning }}</td>
                    <td>{{ displayedObj.semester5 }}</td>
                    <td>{{ displayedObj.semester6 }}</td>
                    <td>{{ displayedObj.fourthCourseBeginning }}</td>
                    <td>{{ displayedObj.semester7 }}</td>
                    <td>{{ displayedObj.semester8 }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="modal-wrapper" v-if="modal">
            <div class="modal-background" @click="hideModal"></div>
            <div class="modal physical-development-modal">

                <div class="modal-close" @click="hideModal"></div>

                <div class="modal-header"></div>

                <div class="modal-body">

                    <div>
                        <label>{{ msg.parameter }}: </label>
                        <select v-model="obj.parameterId" @change="reload" class="uk-select">
                            <option v-for="parameter in parameters" v-bind:value="parameter.id">{{ parameter.name }}</option>
                        </select>
                    </div>

                    <div>
                        <label>{{ msg.first_course_beginning }}: </label>
                        <input type="text" v-model="obj.firstCourseBeginning" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_1 }}: </label>
                        <input type="text" v-model="obj.semester1" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_2 }}: </label>
                        <input type="text" v-model="obj.semester2" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.second_course_beginning }}: </label>
                        <input type="text" v-model="obj.secondCourseBeginning" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_3 }}: </label>
                        <input type="text" v-model="obj.semester3" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_4 }}: </label>
                        <input type="text" v-model="obj.semester4" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.third_course_beginning }}: </label>
                        <input type="text" v-model="obj.thirdCourseBeginning" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_5 }}: </label>
                        <input type="text" v-model="obj.semester5" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_6 }}: </label>
                        <input type="text" v-model="obj.semester6" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.fourth_course_beginning }}: </label>
                        <input type="text" v-model="obj.fourthCourseBeginning" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_7 }}: </label>
                        <input type="text" v-model="obj.semester7" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_8 }}: </label>
                        <input type="text" v-model="obj.semester8" class="uk-input"/>
                    </div>

                </div>

                <div class="modal-footer">
                    <button class="mui-btn mui-btn--raised" @click="commit">{{ msg.add }}</button>
                    <button class="mui-btn mui-btn--raised mui-btn--danger" @click="remove">{{ msg.delete }}</button>
                </div>

            </div>
        </div>
        
    </div>
</template>

<script src="./physical.fitness.module.js"></script>

<style></style>