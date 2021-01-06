<template>
    <div id="control_exercise" class="view">

        <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">{{ msg.control_exercise.full_name }}</div>

        <button style="margin-bottom: 20px;" class="mui-btn mui-btn--raised" @click="showModal">{{ msg.add }}</button>

        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped uk-table-hover uk-table-small">
                <thead>
                    <tr>
                        <th></th>

                        <th>{{ msg.first_course_beginning }} ({{ msg.result }})</th>
                        <th>{{ msg.first_course_beginning }} ({{ msg.rating }})</th>

                        <th>{{ msg.semester_1 }} ({{ msg.result }})</th>
                        <th>{{ msg.semester_1 }} ({{ msg.rating }})</th>

                        <th>{{ msg.semester_2 }} ({{ msg.result }})</th>
                        <th>{{ msg.semester_2 }} ({{ msg.rating }})</th>

                        <th>{{ msg.second_course_beginning }} ({{ msg.result }})</th>
                        <th>{{ msg.second_course_beginning }} ({{ msg.rating }})</th>

                        <th>{{ msg.semester_3 }} ({{ msg.result }})</th>
                        <th>{{ msg.semester_3 }} ({{ msg.rating }})</th>

                        <th>{{ msg.semester_4 }} ({{ msg.result }})</th>
                        <th>{{ msg.semester_4 }} ({{ msg.rating }})</th>

                        <th>{{ msg.third_course_beginning }} ({{ msg.result }})</th>
                        <th>{{ msg.third_course_beginning }} ({{ msg.rating }})</th>

                        <th>{{ msg.semester_5 }} ({{ msg.result }})</th>
                        <th>{{ msg.semester_5 }} ({{ msg.rating }})</th>

                        <th>{{ msg.semester_6 }} ({{ msg.result }})</th>
                        <th>{{ msg.semester_6 }} ({{ msg.rating }})</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="displayedObj in displayedObjList()" v-on:click="chartData(displayedObj)">
                    <td class="uk-table-expand">{{ displayedObj.name }}</td>

                    <td>{{ displayedObj.firstCourseBeginningResult }}</td>
                    <td>{{ displayedObj.firstCourseBeginningRating }}</td>

                    <td>{{ displayedObj.semester1Result }}</td>
                    <td>{{ displayedObj.semester1Rating }}</td>

                    <td>{{ displayedObj.semester2Result }}</td>
                    <td>{{ displayedObj.semester2Rating }}</td>

                    <td>{{ displayedObj.secondCourseBeginningResult }}</td>
                    <td>{{ displayedObj.secondCourseBeginningRating }}</td>

                    <td>{{ displayedObj.semester3Result }}</td>
                    <td>{{ displayedObj.semester3Rating }}</td>

                    <td>{{ displayedObj.semester4Result }}</td>
                    <td>{{ displayedObj.semester4Rating }}</td>

                    <td>{{ displayedObj.thirdCourseBeginningResult }}</td>
                    <td>{{ displayedObj.thirdCourseBeginningRating }}</td>

                    <td>{{ displayedObj.semester5Result }}</td>
                    <td>{{ displayedObj.semester5Rating }}</td>

                    <td>{{ displayedObj.semester6Result }}</td>
                    <td>{{ displayedObj.semester6Rating }}</td>
                </tr>
                </tbody>
            </table>

            <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
                <e-series-collection>
                        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y'>
                            <e-trendlines>
                            <e-trendline :type='type'>
                            </e-trendline>
                    </e-trendlines>
                    </e-series>
                </e-series-collection>
            </ejs-chart>

        </div>

        <div class="modal-wrapper" v-if="modal">
            <div class="modal-background" @click="hideModal"></div>
            <div class="modal">

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
                        <input type="text" v-model="obj.firstCourseBeginningResult" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_1 }}: </label>
                        <input type="text" v-model="obj.semester1Result" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_2 }}: </label>
                        <input type="text" v-model="obj.semester2Result" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.second_course_beginning }}: </label>
                        <input type="text" v-model="obj.secondCourseBeginningResult" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_3 }}: </label>
                        <input type="text" v-model="obj.semester3Result" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_4 }}: </label>
                        <input type="text" v-model="obj.semester4Result" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.third_course_beginning }}: </label>
                        <input type="text" v-model="obj.thirdCourseBeginningResult" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_5 }}: </label>
                        <input type="text" v-model="obj.semester5Result" class="uk-input"/>
                    </div>

                    <div>
                        <label>{{ msg.semester_6 }}: </label>
                        <input type="text" v-model="obj.semester6Result" class="uk-input"/>
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

<script src="./control.exercise.module.js"></script>

<style></style>