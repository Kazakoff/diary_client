<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="teachers" class="view">
        <p style="font-size: 24px; font-weight: bold;">{{ msg.teachers }}</p>

        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-striped uk-table-hover uk-table-small">
                <thead>
                <tr>
                    <th>{{ msg.first_name }}</th>
                    <th>{{ msg.middle_name }}</th>
                    <th>{{ msg.last_name }}</th>
                    <th>{{ msg.phone }}</th>
                    <th>{{ msg.post }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="teacher in teachers">
                    <td>{{ teacher.firstName }}</td>
                    <td>{{ teacher.middleName }}</td>
                    <td>{{ teacher.lastName }}</td>
                    <td>{{ teacher.phone }}</td>
                    <td>{{ teacher.post }}</td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script src="./teachers.module.js"></script>

<style></style>