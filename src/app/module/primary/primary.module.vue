<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="primary">
        <div class="header">

            <div class="logo">
                <img class="icon icons8-Режим-Спорт-Filled" width="60" height="60" src="data:image/png;base64,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"/>
                {{ msg.logo }}
            </div>

            <div class="settings-btn" @click="showSettingsDrop">

                <img class="icon icons8-Настройки-Filled" width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADqUlEQVRoQ+2aj1EVMRDGdytQKxAqECtQKhAqECtQKxAqUCoQKhArECoQK1A6gArW+b3JOfeOJLsXcg+GMTM3vBnuNvtd9s+XL6eywDAzq5j9o6rbvafV3gbNbEdEftbsqmr3ebsbNLPXIvLDeUG7qnre8yUuAeRQRD45Tn5U1S8bB2JmT0VkS1UvvcnN7ERE3jr3Havqh4AtwpScuvbudVckgSBUtkTkUFWPa0bNjJB55Ux8oaqEYHGY2XvmA4iIEIpVMFUgIxC8mWGcici7kmGnYg02rlX1WQ5FmvOriOyN/k8kVMEUgRRA/HNERPbHCZuqFSHlhkwyQo6cjsM1FYpvIkIoT0cVTBaIA2I8Ac4wASFA6LUMQvFIRN4EXkIRzC0gM0C0ON3jmSyYEhAS7EmPWRewcZMq6Fryl0KLRCNWH+IgNyk4a6OW7JF+sGmgxf7jVS3i8fmmvS3MdyUiO6Wy7/WRCG/aFM6XNWYR6ewR7rQ0mCNVxY/iiAA5EBE67X0Oly1HgPy+Q7PrBf5cVXebV8TMWsswtZ6ufzbEdaIw2IPCtPSobVWlv2WHl+wtJfgUZyukEh6FXSjJnFGl/isgZgZPosxSpfjNVaXZBQ8ggeSUO8yMpjYXDHbhZqwMF7+vWCkN0m7XMRHJUofSg4nTdaNCPYG4JXIKysy6lfaeQKoNK7cyEcUlEgrc0w1Iq8TTK7T/A8ks+eMILbarHh9aOtkpgT2oOjs2uq+rQaXeRWOE/uSEhmiOD/ddDQ0RY0g+XDRD/nraVG4yKMl+xAszYwc6lnwij9Gr2CNxsQCXg5KzBEWBfiCJZlemoFtFQPgUpdJ9W0kjICCN3yekcZB8WsKpnTSmWO6VQ5G3XrrHlVgj+5FHs7EiRBCU73O4pd1L9ockPlS3u54c1KvO91jNap+qAWmp8z0crtko9qmSZMq++vPSXjXazx7b5URsujonVC21vtG3WY8RYuTL2jFgSY1nL/xilvnN3fwLPWHKHGoHPREwHNDQMNmythLPi/Q8FdI7Dc6CWO0QHXGgBAZBeW9ybEZI0jyjPYdD1ZOMDdSV3EspgqgCGVHtKRgc4HS3RAprn28M7+1GVbM5mEglKzx+IVUQLpAJGOj9Qe6QZbyqZkYSevnlcqekcsKkCd1bOTGNJJdrjcBIZNMUFN6iHwysVi0ybwjInIIU1Kru5xOOmUAiexj3mGDOnKEcmWswIrq1amA1X7qHVsqpWuVCdG79uKCI5S9MmK4DISA2MQAAAABJRU5ErkJggg=="/>

            </div>
            <div class="settings-drop" v-if="settingsDrop">

                <a @click="redirectToDefaultView" v-bind:class="{ isHome: isHome() }">
                    <img class="icon icons8-Главная" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAByElEQVRoQ+2YT07CUBDGZ6Im/lnYhTX1Fl2auoEjcAO4gUfxBnADjgAbG5fcwsa6qAv/JGDGFIOQSjvvvc4LYoZ1W77f9828D4qw5x/cc/2gALtOUBP41wmEUTIsAfMsHfgC9TZCpXhE7JfCiWjkC0IcIAji4Oj4bIwInU3XiWA6/3jtFcWskExDFGAp/uR0goDxNpEENJu/v3UlIcQAwjCJ4RCGdeJXQCUELGCQ5+lMIgkRgG/xOEGAwEQUARSwoK4ERGuAi+i6g3gwNhW/TgIKos/ec/YwNYGuu6YVQBglfURcHpWuHyIa5Fk6cr3fGUBC/E8aLSCcADbPeFfnqve5doU1gA/xG0lYF54xQF1BSSWwhrArPCMArqDEISwKjwUwLSgfECaF1whgW1DyEHzh1QK4FpQPiKbC2wogecZLAdUV3i+Avyi+qfDYJb68uiEpF12e8/R436hRAVxctblHE7DdAc4x6eeJ74ACVBaEM0QTqJ4onGO6AxXHdIR0hJha5nZKR0hHyPcIhVFSIOK56S9IbmZteoCIXvIsbXxhzO5A+Q8NAO5MIaQASvEAcMu9N2UBTJ3f1XUKsCvnV9+rCWgCLR34ArWjKUBjgl0xAAAAAElFTkSuQmCC"/>
                    {{ msg.home }}
                </a>

                <router-link to="/profile" v-bind:class="{ isProfile: isProfile() }">
                    <img class="icon icons8-Пользователь" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACJUlEQVRoQ+1XO07DQBB9k/AR0KQxSrpwAkKHQkG4CZwgcAI4QjgB4iSYwhGlOQF0jnDjBhCEZNA6ciRCxK49ayJL63Z2dt9nZrxLqPhHFccPR2DVDjoHnANCBVwJLQrYaB6216neB7hHoI6KMzgEyB/z5DoZPTwLRf+RbtUBr9UdEKj/F0AGBnEUXNgiYY2A1zoKCdg3AaYciaPhgcla3RorBEyUXwTC4Os4Gp7rAOriYgKq5jeo/qQ7aFn8kyd70p4QEyiifkbGhgsWCJjX/pIyEveCmMBu64iLlE+W8xIFIgyiZAWi8gTyjM/fJYTHOArSn13RT+xA5Zu48mNUWV/EBRsjVJ0tLqGsdvP0AkNe+9m51giYOmFL+VIIqE1n1+naOUC97HKnFAfYH/N0IL06LE4rqw4UHYWSPEdAop6NXOdA2riNTqO+uX1cq1EPjPRqQOA2iNqpyszPDJq9hQnhdMr+5OPtPknCROqCyAGv2T0FoZ893vOCSR/7TIN4FNzmzRWNUQWcgMu5wkVPz/JmDl0VIZLLgXTGo35DhJ4U87J8ZvhjTM7y/CuMCXhet4M1uiOgUQb4uRlAgi8+ieNhaHKOEYH/Al+EhJaAmjDrWztPZSu/qDYDyfj9dU83qbQEvGbXJ6JjEzttr1E9EY+Ck7/21RKQvnmlpHSPfkdAqrAu3zmgU2jVcW0PrBqg7nxHQKdQ2XHnQNkK6/Z3DugUKjv+DTIv1zHE6w54AAAAAElFTkSuQmCC"/>
                    {{ msg.profile }}
                </router-link>

                <router-link to="/about" v-bind:class="{ isAbout: isAbout() }">
                    <img class="icon icons8-О-нас" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABp0lEQVRoQ+2ZTU7CUBDH55loYtx0A6G7cgOWBg6hR4AbeBOPoN5Ab+CGrrmBsKIpC+uCj9jFmBqC5bUw42ub95oM276P33/+M1MYFLT8o1rODyLAtoOlDni92+BKXTwCwgCUCqxCIs5Bwex7u5kkySzRWQoCPG/gXV7ffCgAzyq4djkCJOl23ddFFAR0/eErgLpzCf6PBd/iZXifZysI6PijT9eifwBGnMdR2D8roOuPML8gXk6tdiqKpySFRECt5SMOmNYAFTmuTdQ5jdUAdbEI2EdAHOCmguk6KhUbc8AUWN9nTQB1MVcgdU5jDlAXiwDpQkQOSArtA0QFQor4VCZRkZMuJF2ImwMV11Gp2FgRV+Q+bBcBpj8pnXOg0xuOlVJPdYEZnYO4iKPwaFbLqgEn4AEAEV5W0XT8r8kcIk6sR/4XHr/S3SZgDHePJ3NGVte5CXGBoN7T3fqBNV7X25bOkjmyisLnOhmrnEXWQP5w1+AzNrYAF+HZAlyFZwlwGZ4U4Dr8WQFtgD8poC3wpQKyrw0u9XnqHWH1DzwKjvNcBHCi1OSaHxbzk0Ad7EItAAAAAElFTkSuQmCC"/>
                    {{ msg.about }}
                </router-link>

                <router-link to="/schedule" v-bind:class="{ isSchedule: isSchedule() }">
                    <img class="icon icons8-Будильник" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE8UlEQVRoQ+1ZS3LbRhDtJm2VLC3MVEwWtAp1gtA7hVpEOoGoE4Q5QagTmD6B6RNEOYHIE0hekPFO9AkErYginQq94KcIA50aEKCBwQxm8EmqVBXtVOzp6Tf9uqfnAeGJ/+ETjx8yAagYJ/W59dEsEnxWn6kAfF/7qVUu4TsCNGfW8LxIAFXj9BaB6o5LV39N/+zr+tYCUKk0Ks/3D28Q4Sxw7JJz/tn6eBf8X602G1iGC0BoEGElbMtsiOAOkeZAMCYHBrPZaBysfWWcnJWwfBv8z2zt9eJyPh/PVUCUAFhg8AxvEaASdhZssrd/8BsAtAGxrtos8jsRo+D1Zr18zx+OBxhgDl/pPAxU5D8RQNVossDe8cGnCjSHsQeC6Gpmja5lbqQAWPCI+HuO/QtbSkS/ykAIAchoo46IBkTQJ3BNdErzIP3MH5XdCkKpjggtALxQ+/pmkUSnGACvYF8cPmjThuiRALpJaRYF62UYoAuIP+iAYSDs1eKYL+wYAK+dhbqNzDkRfSHE7ufJsKcTgMymZjS7BNBBxJcqP6xx8O07AsDr8+XSjcoRsFN3oKXqEEo/voHfgvs62XAc9zJ8T0QA1Izmg6odEsAne7U40+nRugCYnU/dOwT4MXEdkTm1RseBzQ4Au8qfQ+kaEX+WOiB63KyXjaKDD/ZjIPb2D8ZJmSCiDza47WCUidUAuxURSl0eCOM8OHCmS5va0SmFD2I6GSovTWbvdcAyu7WjNcECJ3C74duf2Qudeifx4vDvcAAuwFWags0KgO3JChsQ34T336wW34kyLwQQc0D0OLVGqUaFPAB8EGaESkRvp9aoy9NbBiBSzEk3obQ9ZqRQ4C82CXDFGyvi3UI2VT7D+yz8Da/JmwERjekrveZrMJaBOP9oMJ2MWmlaokeBnBnY+mj2w2OHqA7jALhFWehTFID4QBk/zPgocdS8R8BGcOL8w0U3E0VkIP7QoQ8za7R7VAnbKL+xiHc6IIoA4I0YinoUUCjbBcSDih1EwkyfdCCqg/jPALAgs9RTbgBZKSR70aUBkYlC1aPTcXgizFrE3lwjeZbqgogVMcCn2WS4azCSIo72Xt3NZDzOAyJTGy3qIgsDkoFQZZe/yEAwDwnH6bDIxALRHYWTugkPggj+mFnDtmxN5lFCNAnmpRE/oKmCF9aPZCIWyypHzR4CMsVt+yeZBHUuNN6GFSb/KBH54Z+3BPR+Nhl1eFvxg8Y4qe9h+SFiLJnHs4BQrRE+aMg5FiniCcrc6TUi/LJLgqZWqQpO9btIVEuinBTAVpE+MCNvUyJzs16+/pcf9fdhZYS9xe31si7bUynu8vooAY3t1fK8aBBbWeXgNjwJs2zxOpBWDUR7eJRKQVGTA5e6CoUObbAMN7wmpdOt9KQOo8lkjohexLRKJOpNrdFbVYBJv9eM5htC7MS1WL2XoBYAvx76QtGLyCTArr1eDHRp5X/xuUAgJp8I1A4abFbLto4/LQDfLiIBnaK9tk+EvryOX6LyOr3cyuvE5HXpG1uHNuEtUwEIbkgA6OmoyWmoxbqN61I7zQc+5j81ALbIp0AvfE+kCZa3ZadurxcdHcqk7kJJgXmCMJY6SNDSkca5m/2REPo2ub0835wzZUAEytf4W95nVsA6L5MzWR6BTP8za7+oFlwYgDwUyrP2fwB5Tq+ItU8+A/8ATyX9TzV3UTUAAAAASUVORK5CYII="/>
                    {{ msg.schedule }}
                </router-link>

                <router-link to="/rule" v-bind:class="{ isRule: isRule() }">
                    <img class="icon icons8-Правила" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC2ElEQVRoQ+1ZQXLTQBCcsYMrhAOmQC75hPMCzC3IB8ILcF6A/QL8A5wXULwA5wU4LyAcLLjFvADfopKLKl8SBxtpKDmWs15J0Uq72FGVcox2e6anZ3a32ggZ/8OM5w85gW0rGKlAuVwvl3b33gNACxBrKhMlgjMgtz//Mz2ZTIYTGexQAppm1GEHvyJAWQY8bi8BTFzHbf+2v/fj1kZ9DxBYVv5cddXvSpCI2mPL7KUhESDwrNroFAA+pgFLu8dTYk7Oy4n1Y5QUI0BAqxrnCFj3gYjgZGwNWkmBK1WjD4Bvb/fR6Wx6tcAp7e51APHDOiad2hdmM2mcAIFKtUEsyGx6+STNoAVwyNlnK6zpRgsRP6/F4taIkNkaAS85TTfOEPH1KlGiY9syuyKJ+2tCWqgxRIAXty1EvbFltpOAemv5FvKOzvn15RGr5tPKq2axWPjCxPo2tszDJLE2PsT2xWAVs6wf1EpY/MUoMLItc1+KwPIYHQLi8yRAomtZAjdKrc8c/z0ON/oiK4LXn4/jAJJ+3wgBL6mlEp3lU0KZGhsjwFdWVuoopWRxhZ/TsoFyAhEVyBXwC8O3WFTL3NshzgksJVNykYXJH3cKZV6BpDdy1OxsTYGcwLZnIPMKZH6IcwLbnoHMK6BqiHkcAhq6Dh1H2Y/37jUaVYgo+zEzBDxisxDjS5yAboxYpyIMLE0bic7OAjvE+BImwLtojuMeydjiPtm7cHn7kYgCxpcwgYpudFlD1nPaxtbgTZqqs3s0vdFDhHf+/3gzOe4VLEwg4KItFE3v6/sJ8/Yi3+vKCNy4aLxlvmDRnV1ffUrjYK+e1Nx8eUcn/IU2FKHOOthSLbQwu/SD2gMoDP+HYyfUijJDzAxdwNcXCq5gkdQxysb3+rZQwN4mlZC+yPgCet7pzsNHLSRqrv1IoaDSLAQB/HQdtyv9lFCclzI44WNUWUTFQDkBxQVNDPcP6jX5QMMuBC8AAAAASUVORK5CYII=">
                    {{ msg.rule }}
                </router-link>

                <a @click="exit">
                    <img class="icon icons8-Выход" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACIElEQVRoQ+2ZT07CUBDGv8FojC6sixq6Ek9g3ZlyCL2BeAM4CRwBb6CHoHFHvQGuaNqFdaExoo55AsZA2/dKwb4mZcv7M7+Z773OvCGU/Ecltx8VQNERVIqAUT9v7FCtC4YNosZGjWYegeC981cn8u9Hsr2kAML4bdoaEmDIFlvn/wxEE/48k0FIAY4s5xagi3Uap74W3wVj9zJtvBTAtJpP/+39X4OZR4HvnuQCOLKa/HeBYDyQQqt7eHlk1v2kxmRdMI/xYm7W/SqAvB5fnF9FIK9H8kak9BEwraZHwOncEbJbT7tDbBi2sb273yPClYDQHsA0HTsMXW9RembdaQHohb6bmsIUHgHxpQdzJ/Td/hJEAtzfcYUDzA8tM/cnb6+dKPKiLBeBNgDCaAZ7+MB1nKSSoLQCmEIgSpJUHIR2AHMjVSW1MYDFD1IWXf9CKEhKawAVSekPwPwMoB13zQpArQEYeMAHt9JupY0BqGo+6aww42by9tKWfRe0A2CJZBYdoxWAimS0BVCVjHYAZt0RuU/sLZOUqWqVzKWm00TdcDw4LNW70LSg2esSkagH9C9olmoAyxkSyC5tSVn6or4CqN6FVJOghHGVhGLeZyIiOsjp2NWmMz8Gvpvak1NI5kreYvpp8qHm/XcURFo9wZedu8knYj9rs/Zmbdbj1fSgOIv5cdZmbcuMVyopFbctbJj0DBRmmeLGFYCiozY27BuPdKNAdktcMAAAAABJRU5ErkJggg=="/>
                    {{ msg.sign_out }}
                </a>

            </div>

        </div>

        <div class="footer" @click="hideSettingsDrop">

            <div>&#169; {{ msg.copyright }}</div>

            <select class="locale uk-select" v-model="selectedLocale" @change="changeLocale">
                <option v-for="locale in locales" v-bind:value="locale.value">{{ locale.name }}</option>
            </select>

        </div>

        <div class="container" @click="hideSettingsDrop">
            <router-view></router-view>
        </div>

    </div>
</template>

<script src="./primary.module.js"></script>

<style>
    .isHome { border-left: 3px solid #4d759a; }
    .isProfile { border-left: 3px solid #4d759a; }
    .isAbout { border-left: 3px solid #4d759a; }
    .isSchedule { border-left: 3px solid #4d759a; }
    .isRule { border-left: 3px solid #4d759a; }
</style>