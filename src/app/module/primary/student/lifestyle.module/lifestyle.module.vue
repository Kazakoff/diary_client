<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="lifestyle" class="view">

        <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">{{ msg.lifestyle.full_name }}</div>

        <button style="margin-bottom: 20px;" class="mui-btn mui-btn--raised" @click="showModal">{{ msg.add }}</button>

        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped uk-table-hover uk-table-small">
                <thead>
                    <tr>
                        <th></th>

                        <th>{{ msg.course }}</th>
                        <th>{{ msg.september }}</th>
                        <th>{{ msg.october }}</th>
                        <th>{{ msg.november }}</th>
                        <th>{{ msg.december }}</th>
                        <th>{{ msg.january }}</th>
                        <th>{{ msg.february }}</th>
                        <th>{{ msg.march }}</th>
                        <th>{{ msg.april }}</th>
                        <th>{{ msg.may }}</th>
                        <th>{{ msg.june }}</th>
                        <th>{{ msg.july }}</th>
                        <th>{{ msg.august }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="displayedObj in displayedObjList()" v-on:click="chartData(displayedObj)">
                        <td class="uk-table-expand">{{ displayedObj.name }}</td>

                        <td>{{ displayedObj.course }}</td>
                        <td>{{ displayedObj.september }}</td>
                        <td>{{ displayedObj.october }}</td>
                        <td>{{ displayedObj.november }}</td>
                        <td>{{ displayedObj.december }}</td>
                        <td>{{ displayedObj.january }}</td>
                        <td>{{ displayedObj.february }}</td>
                        <td>{{ displayedObj.march }}</td>
                        <td>{{ displayedObj.april }}</td>
                        <td>{{ displayedObj.may }}</td>
                        <td>{{ displayedObj.june }}</td>
                        <td>{{ displayedObj.july }}</td>
                        <td>{{ displayedObj.august }}</td>
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

                </div>

                <div class="modal-footer">
                    <button class="mui-btn mui-btn--raised" @click="commit">{{ msg.add }}</button>
                    <button class="mui-btn mui-btn--raised mui-btn--danger" @click="remove">{{ msg.delete }}</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script src="./lifestyle.module.js"></script>

<style></style>