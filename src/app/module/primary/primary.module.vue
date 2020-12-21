<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="primary">
        <div class="header">

            <div class="logo">
                <img class="icon icons8-Режим-Спорт-Filled" width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD5klEQVRoQ92a/VEWMRDGdytQKxArUCtAKlArUCsQK1ArECtQKhAqECoQKhA60ArW+TnJO3dHctkNOZxxZ97hn9xlnzz78WQPlY3MzN6KyAsReZK2uBCRr6p6vMWWOvqlZobj30Rkr/LuKxF5qaoAG2ZDgZgZzv8QkfsND3+JyFNVBdQQGw3ku4g8c3p2pqoHzrXNZcOAJDZ+NnecL3g0ipWRQA5F5FMQyDtVPQo+U1w+EsgHEXkfdOqjqvLcrW0kkP+GEcouFStiVK4hZXgYI3hvZmcisu9Ecq6q3grXfOVoILACmHuNnX9TpkexwV5DgSRWWmCGg9gESAJDZyf5X4vIw8TONVpLRI5Ulc4+1LoZSZqKEIIB4n1I0rbQmdmrJIFOp810FUhylhPFWU6Zv+ippSA8UFVyYzNLvnyZqOmZXpsBMTNkN4izwy7HVPXGgaSNn4sIwhDGugWimRGiqIalGN011J0DCQTyO2rXqjpjyMxKzZH8YGM3IDPDcQAApGS7SJgC6ZEYvHzWDxzi0QWoEEpLIMequgM4BUJzQoZHbQnEeyBVQCuhlH27odGWOXIiIsR1xJZAyLNIiM4AmRmhRGjW7I2q8szMlkCIScporv3TxaepD+QecFWLdzMjD0rvWDsgnKPI5Dt+aW0RBAtr1aYk/tw3uhTfsBsFUwOKGjgsMZEfKPaRStXhGbdaTRWHEOHX0l5rTLkkTbUhmhlU01OmNqsU3kRKyUsRiDLkAlEMrexcOlG69eOFww+yVkpr9lWV/Gla6lUw5JH6l/QPr/RpSRQaHck/DY1dEzKzXGopADD42dPwzIxSTw9YMp4PAxDIfLe4bIrGlLg4CTOXqrqrKmbG1GSpu2DRNVFMzRNA0zw6Z0IZAbEaWss4Sad4MQkrHEDE1SyzRF41lXEKO1FVql3YmozU3lhho7YcIIx9kN7ucImg6QJyC4EJCE6cXGqydBdAIqPRmj90fwZ0XaG0fGmYkZQrPeKyBmjIpawHyAg2pqCGTBtDQBx3jUhY57VVIRh5WRRISbZE9luu7ZI8pQ3dQAazQdOjad64V/SeSgQIfYDvgj2G5KDj//1t0UtcQJI4RI60PqllkAzjsuMnWzjeVX4n4rDGBnJ76rh7UtJDb1eOONngK+2QxtYLrBla6VK0Jg6RG2vDgl7fQs95gJSket4kfG8IeRdY3LpYtaS6+w4f8KlraQsI05TaeGbYF9kuzxcPrQ0f1iaPQz+bbQ2kNnWk1O7dRW+IAKzNtbiH1/6LYYjsjjjpWVsDUgurIZLb41h0TYSRYUo16qRn/VqyM1VHKKKvUKr/vOmtAfoDNiqcQl7pH+IAAAAASUVORK5CYII="/>
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
    .isHome { border-left: 3px solid #16193B; }
    .isProfile { border-left: 3px solid #16193B; }
    .isAbout { border-left: 3px solid #16193B; }
    .isSchedule { border-left: 3px solid #16193B; }
    .isRule { border-left: 3px solid #16193B; }
</style>