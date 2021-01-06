<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="students" class="view">

        <p style="font-size: 24px; font-weight: bold;">{{ msg.students }}</p>

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
                        <th></th>
                        <th></th>
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
                    <tr v-for="student in students">
                        <td>
                            <span style="cursor: pointer; display: inline-block; width: 30px;" @click="showRemoveModal(student.id)">
                                <img class="icon icons8-Удалить-пользователя" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACPElEQVRoQ+1YzU7CQBCeAdGol15q4IZPIN6MHIQnMT6B+Aa8gfgExicBDxBv4hPIDWIvvahRhHW2TdEgYbfT3RqS3YMxaWf3+5mZnYKw4Qs3HD84Av/toHPAOZBRAZdCugJ65ZNqCYuXAKKBgDUZJ0AMAbA3FbObcPIw0t3r93u5OOBX6td0UGsdQAHQCcb9q7QkrBPwK6ePieIqcNKRYDw4Vr2XmwMEvkPgKW30F5G4IRJr3cqFgMz5bSw+60P/efNTzA51a8JaCnHUTyikccEmAe3cX3YpTS1YI3BQqVNj4a+XcV8Lm9ZLHBgbT4B6/5DUOeKQJ+ue6E6ILjvVsubAxhdx7m3URs5yXEjTQmV6LVLIBgF5QJpaSJP7SW1YJxCTUI8UaZXPlYA8LB6nCzTjII3TcXeSitNfGqfnHd3RYbkrWetCqvZn6rkjYEpJ7j7OgXXKeV7NK+7snRUK2KCKjUYDBFEFxGoUJ8RIAI6i/xGG87nozT7e7sNwGOo6YsUBv1w/BxQt3U/JZbDRx77ATjDp36mIGCUggZPC7YXCqtNVz2OH2uuIGCEQ9Xgo3iJCQ4WJ81wI6E1hdrHqrshMwPdPa7CFXdrI44DTjaFLL4Qv0QyCAf2W9LMyEcgLfAJ3FQk2AdlhSrv7z7aV/1vgEE7fXw+TTsUmQAXbtZXzqrSSNUGF3Yy7L3NlHb+Zxy7Cko9+RyCrktx45wBXOdNx7BowDYS7nyPAVc5UnHPAlJLcfZwDXOVMxX0DvQzpMcP2+6UAAAAASUVORK5CYII="/>
                            </span>
                        </td>
                        <td>
                            <span style="cursor: pointer; display: inline-block; width: 30px;" @click="showModal(student)">
                                <img class="icon icons8-Карандаш" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABlUlEQVRoQ+3Yy1HDMBCA4VUq4EAIKQVyIZ2QCoAKaIEOgE64JGdK4EZmzIHcMyxSZsyYoOdK1q5m8DV25v8s+SUFjW+q8X74B3CPoKgROJ0vbnXQPQC+wR5WXbd5DZ0gMYDp+eW1UuqxD0aAT9jjMoQQATiOT0GwA1zxsQjxAAPxTSd2gAkMjYIPwQIwwSaq226e+qkShUB46bbr5fDOVB0wDEXEVQpC77/T+5+wAWxnOQXxBXD38b5+YAH4pkgMAhGe9fQ5TL3qgLj57Z5OrngDGf0aiIn/uedbrgmdeGU78/0xowJS4l0ItnchSjwFMcoI5MQfHlpHU8k3CsUBNeOLX8S144sCOOKLAbjiiwA447MB3PFZAAnxZICUeBJAUnwyQFp8EkBifDRAanwUQHJ8ECA93gtoId4JaCXeCpjOLm7UZPJr6SL0WTf8PeVjJOV/Xfv++aA5my/0UiRtqx1vHQEqgCO+GIArvgiAMz4bwB2fBZAQTwZIiScBJMUH34VoT4O6RxVfmaubX2F5fWxQ8yPwDdqMaECqlGOaAAAAAElFTkSuQmCC"/>
                            </span>
                        </td>
                        <td>
                            <span style="cursor: pointer; display: inline-block; width: 30px;" @click="showChartsModal(student)">
                                <img class="icon icons8-Комбинированный-график-Filled" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC4ElEQVRoQ+2XT27aUBDGvzFppKSLukpMzKr0BnSXmA09QckJ6p4g6QlKT1B6AsgJmp6AdAHtrukJQlYgSCWyCEQJeKpHMDJ/DO+lmGBkb/1kz2/mm2/mEdbkoTXhQKhAds39jAatIJLvwPlwVf915hYiVCBx07oAUbIfPHO1Ua+8DiWIYVotInoxALls1CsPUEB4pLUTP8jGYto3F8KBY4dOWrqe0p9tPb8gQHeAj1e1cn7cpELRI4aZLhEhw8w/mvVKZprTrjzIbiJ9rAFfmPn6/radbLXOW6EDMQwrRRv0WwTe6zmHfxs/T/3m3spW5KEvtksESjH4a7NWOZ41vAMFcQcYE+nMvUOvy8zbKIyElSfQEQN/7js3GT9JLcV+Zw2wWSBeq+Uuv2k2K+fzwAOrSL8aFCuNBMBcZVCuWS+f+AUmY7VLa3Zj7+CING3o9cJxCGiB6JW7XvgByVht4CAim5tb2wWAsoOAPzfqlZz7Y8O0bAJyfkB+VhtPpHmWtBq1Mi1MWsIqsYFC32WYrx2HbT+7nApEpIvJPc1qlwYimlOLaQURiHAZdNmWadAJILHUAq1mrfzSW4GlgMRN6xOIBvLh73edtj3PKsdlEjetqkduI1utOBsYiLcCblB+y9w82xTvhcMRtFNhCONbbWAgurmf3IRWGl5wxG2Ne29Vhp0MXGDS2tmz3sU02ENHcv/EPCEF1UDnnf9vaQ2y/x6A7a0AM04AzvpJYV5gqu+VQby7EYHPRrLPfOkQ5budm6JqM6sGPmEGqnNkZDcafE1kn9ErqvSATAZV4GS+NzIQxy/3d7ft1GOyL/PjQEEG0ipyf7A5WZUqqLpMoCAqH5919skrEoGMZUC2Ios8t7Dt9zE9EoGMKUD5PrLIDMoug7LnlKQVgUyRgmymZc+tV0VWWTJKFYlAlqD9qCLT9i0xcGQz81TnVj5A2cREIKsmwagiUUUABOGCkbQiaQUkrX9/owFgYusawgAAAABJRU5ErkJggg=="/>
                            </span>
                        </td>
                        <td>{{ student.firstName }}</td>
                        <td>{{ student.middleName }}</td>
                        <td>{{ student.lastName }}</td>
                        <td>{{ student.nationality }}</td>
                        <td>{{ student.gender }}</td>
                        <td>{{ student.birthDate }}</td>
                        <td>{{ student.birthPlace }}</td>
                        <td>{{ student.school }}</td>
                        <td>{{ student.address }}</td>
                        <td>{{ student.medicalGroup }}</td>
                        <td>{{ student.diagnosis }}</td>
                        <td>{{ student.studentNumber }}</td>
                        <td>{{ student.course }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="c-modal-wrapper" v-show="removeModal">
            <div class="c-modal-background"></div>
            <div class="c-modal">
                <div class="c-modal-header"></div>
                <div class="c-modal-body">
                    <div>{{ msg.del_msg }}</div>
                </div>
                <div class="c-modal-footer">
                    <button class="mui-btn mui-btn--danger" @click="removeAddedStudent">{{ msg.delete }}</button>
                    <button class="mui-btn mui-btn--primary" style="background: #10382b;" @click="hideRemoveModal">{{ msg.cancel }}</button>
                </div>
            </div>
        </div>

        <div class="modal-wrapper" v-if="modal">
            <div class="modal-background" @click="hideModal"></div>
            <div class="modal">

                <div class="modal-close" @click="hideModal"></div>

                <div class="modal-header">
                    <span style="font-size: 16px; color: #000000; display: block; height: 100%; line-height: 30px; margin-left: 25px;">
                        {{ student.firstName }} {{ student.middleName }} {{ student.lastName }}
                    </span>
                </div>

                <div class="modal-body">

                    <div>
                        <label>{{ msg.parameter_type }}:</label>
                        <select v-model="typeId" @change="load" class="uk-select">
                            <option v-for="type in types" v-bind:value="type.id">{{ type.name }}</option>
                        </select>
                    </div>

                    <div v-if="typeId === 3">
                        <label>{{ msg.course }}: </label>
                        <select v-model="obj.course" @change="reload" class="uk-select">
                            <option v-for="course in courses" v-bind:value="course">{{ course }}</option>
                        </select>
                    </div>

                    <div>
                        <label>{{ msg.parameter }}: </label>
                        <select v-model="obj.parameterId" @change="reload" class="uk-select">
                            <option v-for="parameter in parameters" v-bind:value="parameter.id">{{ parameter.name }}</option>
                        </select>
                    </div>

                    <span v-if="typeId === 1 || typeId === 2" style="display: block;">
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
                    </span>

                    <span v-if="typeId === 3" style="display: block;">

                        <div>
                            <label>{{ msg.september }}: </label>
                            <input type="text" v-model="obj.september" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.october }}: </label>
                            <input type="text" v-model="obj.october" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.november }}: </label>
                            <input type="text" v-model="obj.november" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.december }}: </label>
                            <input type="text" v-model="obj.december" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.january }}: </label>
                            <input type="text" v-model="obj.january" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.february }}: </label>
                            <input type="text" v-model="obj.february" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.march }}: </label>
                            <input type="text" v-model="obj.march" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.april }}: </label>
                            <input type="text" v-model="obj.april" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.may }}: </label>
                            <input type="text" v-model="obj.may" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.june }}: </label>
                            <input type="text" v-model="obj.june" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.july }}: </label>
                            <input type="text" v-model="obj.july" class="uk-input"/>
                        </div>

                        <div>
                            <label>{{ msg.august }}: </label>
                            <input type="text" v-model="obj.august" class="uk-input"/>
                        </div>
                    </span>

                    <span v-if="typeId === 4" style="display: block;">
                        <div>
                            <label>{{ msg.first_course_beginning }}: </label>
                            <input type="text" v-model="obj.firstCourseBeginningResult" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.firstCourseBeginningRating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.semester_1 }}: </label>
                            <input type="text" v-model="obj.semester1Result" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.semester1Rating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.semester_2 }}: </label>
                            <input type="text" v-model="obj.semester2Result" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.semester2Rating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.second_course_beginning }}: </label>
                            <input type="text" v-model="obj.secondCourseBeginningResult" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.secondCourseBeginningRating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.semester_3 }}: </label>
                            <input type="text" v-model="obj.semester3Result" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.semester3Rating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.semester_4 }}: </label>
                            <input type="text" v-model="obj.semester4Result" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.semester4Rating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.third_course_beginning }}: </label>
                            <input type="text" v-model="obj.thirdCourseBeginningResult" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.thirdCourseBeginningRating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.semester_5 }}: </label>
                            <input type="text" v-model="obj.semester5Result" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.semester5Rating" class="uk-input" style="width: 230px"/>
                        </div>

                        <div>
                            <label>{{ msg.semester_6 }}: </label>
                            <input type="text" v-model="obj.semester6Result" class="uk-input" style="width: 230px"/>
                            <span style="margin-left: 15px; margin-right: 15px;">{{ msg.rating }}: </span>
                            <input type="text" v-model="obj.semester6Rating" class="uk-input" style="width: 230px"/>
                        </div>
                    </span>

                </div>

                <div class="modal-footer">
                    <button class="mui-btn mui-btn--raised" @click="edit">{{ msg.edit }}</button>
                    <button class="mui-btn mui-btn--raised mui-btn--danger" @click="remove">{{ msg.delete }}</button>
                </div>

            </div>
        </div>

        <!--TODO CHARTS-->
        <div class="ch-modal-wrapper" v-if="chartsModal">
            <div class="ch-modal-background" @click="hideChartsModal"></div>
            <div class="ch-modal">
                <div class="ch-modal-close" @click="hideChartsModal"></div>
                <div class="ch-modal-header">
                    <span style="font-size: 16px; color: #000000; display: block; height: 100%; line-height: 30px; margin-left: 25px;">
                        {{ student.firstName }} {{ student.middleName }} {{ student.lastName }}
                    </span>
                </div>
                <div class="ch-modal-body">
                    <div>
                        <label>{{ msg.parameter_type }}:</label>
                        <select v-model="typeId" @change="load" class="uk-select">
                            <option v-for="type in types" v-bind:value="type.id" v-if="type.id !== 3">{{ type.name }}</option>
                        </select>
                    </div>
                    <div>
                        <label>{{ msg.parameter }}: </label>
                        <select v-model="obj.parameterId" @change="reload" class="uk-select">
                            <option v-for="parameter in parameters" v-bind:value="parameter.id">{{ parameter.name }}</option>
                        </select>
                    </div>

                    <span style="display: block;">
                        <vue-chart :columns="columns" :rows="rows" :options="options"></vue-chart>
                    </span>

                </div>
                <div class="ch-modal-footer"></div>
            </div>
        </div>
    </div>
</template>

<script src="./students.module.js"></script>

<style>
    /* CHARTS MODAL STYLE */
    .ch-modal-background {
        z-index: 1;
        position: fixed; top: 0; left: 0; bottom: 0; right: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .ch-modal {
        z-index: 2;
        position: fixed;
        background: #87c1cc; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        width: 1000px;
        height: auto;
        top: 60px;  left: calc(50% - 500px);
        font-size: 14px;
    }
    .ch-modal-header {
        width: 100%; height: 30px;
        background: #87c1cc;
    }
    .ch-modal-body {
        width: 950px;
        margin: 0 auto;
    }
    .ch-modal-body div {
        display: flex;
        margin-top: 10px;
    }
    .ch-modal-body div:last-child {
        margin-bottom: 20px;
    }
    .ch-modal-body label,
    .ch-modal-body input,
    .ch-modal-body select {
        display: block;
        color: #585858;
    }
    .ch-modal-body label {
        width: 30%;
    }
    .ch-modal-body input,
    .ch-modal-body select {
        width: 70%;
    }
    .ch-modal-footer {
        padding-left: 25px;
        padding-bottom: 25px;
    }
    .ch-modal-close {
        display: inline-block;
        width: 20px; height: 20px;
        position: absolute;  top: 5px;  right: 5px;
        cursor: pointer;
    }
    .ch-modal-close::before,
    .ch-modal-close::after {
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
    .ch-modal-close::before {
        transform: rotate(-45deg);
    }
    .ch-modal-close::after {
        transform: rotate(45deg);
    }
    .ch-modal-body div:last-child {
        margin-bottom: 0;
    }
    .ch-modal-body div {
        margin-top: 0;
    }
</style>