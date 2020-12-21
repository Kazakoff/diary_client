<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="schedule" class="view">
        <p style="font-size: 24px; font-weight: bold;">{{ msg.schedule }}

            <span v-if="editSchedule">
                <label for="schedule-upload" style="cursor: pointer; margin-left: 5px;">
                    <img v-bind:title="msg.upload_schedule" uk-tooltip class="icon icons8-Загрузить-в-облако" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEHklEQVRoQ+1YS1YaQRSt163GzyDkRDwwiq4gOFMYiCvQrEBdQcgKxBWIK1BXIFmBMPAzC1mBZAQRc0IGfiJ0v7xqbCyK6u5qGszxHHrEOdTn3ffuu3WrgL3yD155/GwM4H9XcFyBcQUiZmBMITeBsVgqNjk9t0G6lmLIUgAs200uYhUZVOm/im1jyfp7V242K82IyXemR65ALLGyOMmMXQDY1g0IGWsyxGKL2XvN+mVVd55q3MAAnIzPzO3SArkoARCQ/HX9fG/QNQYCEI+nU2CyEwawOOjG4jxkWGFtttNonFfCrhcaAA+eTcApTYz1bYb4A4EVEe1i++Gh4vKc08y0IWWYkAVkmwT8gzzXoVUb18OCCAXAM3geOGP5Rv38SCeD8UR6mzbOy0A4iBZay2H6QhtAh/OzlHlI9ZQf2XHr4TYXVlWeVKtAarUl06l1f7euu542gHgyXaDgP4ub2Yx9uamdFXSy7jUmnsgcKUAcNGrnWuLgC8DJ0puZLTCANB025cw36mfa0ukHUgXiEa0lHSopAXTKO7vvpe3E1e+N2lkPlaJUge83NT1bEXsCiZo6CeoD8H5hddMwjUOlyjxFiW1cDqsWQQCdxgY4FMc93t++C+qFHgCqRRRSuUcHTz4oIP6/o1r06YJdSKTJbjxLLCLuBClbFwDPvGkaJypttwEKDK3KTf2ypBM4H+OqFv+tqyp9veB4KEZ7QonodKza2wHg+Bkwv4m0IfR/ECA/qMpQNQ/dHqK1jiiTO0HgPZNIE/kZYVv2zq/ri6K4jgNARs6DZxbL6pZeDkxFRR06OM08M/fbD6icDODZnwLzSpwURd+9Tmtdq0DgS1S5NV0QMJ/M5AzG9rsTyBZQky4GlVv1v9dp7Y7lpk23H7r+yYCcCpBl2Z84nWAhmSZOwUZ3E43O9wIn8t5rjG4/iPOV6kgNToleApKuK9EW656AOrz3AREojzrr8ypQBTJEz+fvunam7Y/cWb4WW4FCtx8UIHr6gyh5EBlAEO89qxCiH7qJkk5romMZ4slMhVL+sdsDIW2CDu+H1Q/ziZWsAeap0K/lviaOIqFioMOgpgxcCUAho053DyKjowbQr0b4degHmQtiFBUgx3AqvjdxtiitBA8iqmUeNgCVT+Ixdsxc5wJTpRPvrUgDtO1c4+fFwSB0GiYAzn0A80Qym2UyiFkdO10luSowG8phzN0wAMwnVtfoHs4vOttyEl2GhL/QeJRDPgD9AMhqErbCorNVXykNoJeCXjoFbfJSAGSZ97nUz/W92fiBGDUA/pCAaOXkW6H/swrdFSbA3DQYZul5fFE8sWUwowDArQI55apt20X5JubuH9q4BVFplOeAau8xAK+KDENGdao9roBOlkY5ZmQVGGXQ4tpjAC+Vaa99/gEuYGrzcXahTgAAAABJRU5ErkJggg=="/>
                </label>
                <input type="file" id="schedule-upload" style="display: none" @change="upload"/>

                <img v-bind:title="msg.delete" uk-tooltip style="cursor: pointer;" @click="remove" class="icon icons8-Удалить" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABQklEQVRoQ+1ZMW7CQBDcRYI2NCCo8BNcIngEPCH5AU/hB+EJySNipeQJUGGZBlqQWM6FJSIk3645y3I0bj13NzO7Nyf7mFr+cMv5EwQ0XUFU4F9VYDCavTPzZ5koEdkc0+QjlPBgLaQhX5AOKUItYDieSyjXNPNkhx8VNxUoXxACNLY/YFABo2GNwdV7oDGGnoXNAurezNreL3RBQOjWQgV8jmIPeBxCC6GFfA6ghf46gIPsxY55Go4U8jmKgwwphBSq9/cKUggp5HMAKYQUQgqV7gLEqC9E3EXGyd3CvPlwld6L7LM0iSxjK3zQzL6IeGFZRI+V7+yQLPV4x8QCzrH90TTqUmcbugru2ul8pVt8Sn93Fk5mAYWIHnfWJBQT88Sy4BPWtY2zcXuR28pKPp+rkoCXCAceDAGBDTVP1/oK3AF9j60xRTSXkwAAAABJRU5ErkJggg=="/>

            </span>

        </p>

        <div style="text-align: center">
            <img v-bind:src="schedule.url" v-if="schedule.url !== null"/>
            <p style="font-size: 40px; color: #d6d4d4; font-weight: bolder; margin-top: 100px;" v-if="schedule.url === null">{{ msg.no_schedule }}</p>
        </div>

        <div class="spinner" v-if="spinner">
            <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
            </div>
        </div>

    </div>
</template>

<script src="./schedule.module.js"></script>

<style>
    #schedule {
        position: fixed; top: 60px; left: 10px; right: 10px; bottom: 70px;
        background: #ffffff; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        overflow-y: auto;
    }
</style>