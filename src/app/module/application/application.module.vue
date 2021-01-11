<template>
    <div id="application">
        <router-view></router-view>
    </div>
</template>

<script src="./application.module.js"></script>

<style>
    *, *::after, *::before {
        box-sizing: border-box;
    }

    /* HEADER STYLE */

    .header {
        z-index: 1;
        position: absolute; top: 0; left: 0;
        width: 100%; min-width: 800px; height: 60px;
        background: #4d759a; 
        font-size: 14px;
    }
    .logo, 
    .settings-btn {
        position: absolute; top: 0; height: 50px;
        line-height: 50px;
        color: #87c1cc; text-align: center;
    }
    .logo { 
        left: 15px;
        font-weight: bold; font-size: 24px;
    }
    .settings-btn {
        width: 100px;
        right: 100px;
        cursor: pointer;
    }
    .settings-drop {
        position: absolute; top:60px; right: 75px;
        width: 150px;
        background: #87c1cc; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
    }
    .settings-drop a {
        display: block;
        width: 100%; height: 35px; line-height: 35px;
        border-top: 1px solid #87c1cc;
        padding-left: 10px;
        color: #4d759a;
    }
    .settings-drop a:first-child { border-top: none; }
    .settings-drop a:hover { text-decoration: none; border-left: 3px solid #4d759a; }

    /* CONTAINER STYLE */

    .container {
        position: absolute; top: 50px; left: 0; right: 0; bottom: 0;
        width: 100%; min-width: 800px;
        background-color: #87c1cc;
    }

    /* FOOTER STYLE */

    .footer {
        z-index: 1;
        position: absolute; left: 10px; right: 10px; bottom: 10px;
        min-width: 800px; height: 50px;
        background: #87c1cc; 
    }
    .footer div {
        height: 100%; line-height: 50px;
        padding-left: 10px;
        font-size: 14px; color: #4d759a;
    }

    .locale {
        position: absolute; top: 10px; right: 10px;
        width: 50px;
    }

    /* LEFT SIDEBAR STYLE */

    .left-sidebar {
        position: absolute; top: 10px; left: 10px; bottom: 70px;
        background: #87c1cc; 
    }
    .left-sidebar a {
        display: block;
        width: 200px; height: 35px; line-height: 35px;
        padding-left: 10px;
        border-top: 1px solid #87c1cc;
        cursor: pointer;
        font-size: 14px; color: #4d759a;
    }
    .left-sidebar a:first-child { border-top: none; }
    .left-sidebar a:hover { text-decoration: none; border-left: 3px solid #4d759a; }

    /* CONTENT STYLE */

    .content {
        position: absolute; top: 10px; left: 220px; right: 10px; bottom: 70px;
        background: #87c1cc; 
        overflow-x: auto;
    }

    .view { padding: 25px; }
    /* MODAL STYLE */
    .modal-background {
        z-index: 1;
        position: fixed; top: 0; left: 0; bottom: 0; right: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .modal {
        z-index: 2;
        position: fixed;
        background: #87c1cc; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        height: auto;
    }
    .modal {
        width: 800px;
        top: 10px;  left: calc(50% - 400px);
        font-size: 14px;
    }
    .modal-header {
        width: 100%; height: 30px;
        background: #87c1cc;
    }
    .modal-body {
        width: 750px;
        margin: 0 auto;
    }
    .modal-body div {
        display: flex;
        margin-top: 10px;
    }
    .modal-body div:last-child {
        margin-bottom: 20px;
    }
    .modal-body label,
    .modal-body input,
    .modal-body select {
        display: block;
        color: #585858;
    }
    .modal-body label {
        width: 30%;
    }
    .modal-body input,
    .modal-body select {
        width: 70%;
    }
    .modal-footer {
        padding-left: 25px;
        padding-bottom: 25px;
    }
    .modal-close {
        display: inline-block;
        width: 20px; height: 20px;
        position: absolute;  top: 5px;  right: 5px;
        cursor: pointer;
    }
    .modal-close::before,
    .modal-close::after {
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
    .modal-close::before {
        transform: rotate(-45deg);
    }
    .modal-close::after {
        transform: rotate(45deg);
    }
    /* ADMIN MODAL */
    .admin-modal-background {
        z-index: 1;
        position: fixed; top: 0; left: 0; bottom: 0; right: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .admin-modal {
        z-index: 2;
        position: fixed;
        background: #87c1cc; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        height: auto;
    }
    .admin-modal {
        width: 550px;
        top: 60px;  left: calc(50% - 275px);
        font-size: 16px;
    }
    .admin-modal-header {
        width: 100%; height: 30px;
        background: #87c1cc;
    }
    .admin-modal-body {
        width: 500px;
        margin: 0 auto;
    }
    .admin-modal-body div {
        display: flex;
        margin-top: 10px;
    }
    .admin-modal-body div:last-child {
        margin-bottom: 20px;
    }
    .admin-modal-body label,
    .admin-modal-body input,
    .admin-modal-body select {
        display: block;
        color: #585858;
    }
    .admin-modal-body label {
        width: 30%;
    }
    .admin-modal-body input,
    .admin-modal-body select {
        width: 70%;
    }
    .admin-modal-body input {
        height: 40px;
        line-height: 38px
    }
    .admin-modal-footer {
        padding-left: 25px;
        padding-bottom: 25px;
    }
    .uk-input, .uk-select:not([multiple]):not([size]) {
        height: 30px;
        line-height: 30px
    }
    .uk-input:focus {
        border: 1px solid #4d759a;
    }
    .uk-select:focus {
        border: 1px solid #4d759a;
    }
    .search {
        background-image: url("https://maxcdn.icons8.com/iOS7/PNG/25/Very_Basic/search-25.png");
        background-repeat: no-repeat;
        background-position: 5px;
        outline: none;
        padding-left: 35px;
        height: 40px;
        line-height: 38px
    }
    .admin-panel div {
        margin-bottom: 24px;
    }
    .add-btn {
        margin-right: 10px;
    }
    /* SPINNER */
    .spinner {
        position: absolute;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        width: 80px;
        height: 80px;
    }
    .sk-circle {
        margin: 100px auto;
        width: 40px;
        height: 40px;
        position: relative;
    }
    .sk-circle .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .sk-circle .sk-child:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #4d759a;
        border-radius: 100%;
        -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    }
    .sk-circle .sk-circle2 {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg); }
    .sk-circle .sk-circle3 {
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg); }
    .sk-circle .sk-circle4 {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg); }
    .sk-circle .sk-circle5 {
        -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        transform: rotate(120deg); }
    .sk-circle .sk-circle6 {
        -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        transform: rotate(150deg); }
    .sk-circle .sk-circle7 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg); }
    .sk-circle .sk-circle8 {
        -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
        transform: rotate(210deg); }
    .sk-circle .sk-circle9 {
        -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
        transform: rotate(240deg); }
    .sk-circle .sk-circle10 {
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg); }
    .sk-circle .sk-circle11 {
        -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
        transform: rotate(300deg); }
    .sk-circle .sk-circle12 {
        -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
        transform: rotate(330deg); }
    .sk-circle .sk-circle2:before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s; }
    .sk-circle .sk-circle3:before {
        -webkit-animation-delay: -1s;
        animation-delay: -1s; }
    .sk-circle .sk-circle4:before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s; }
    .sk-circle .sk-circle5:before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s; }
    .sk-circle .sk-circle6:before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s; }
    .sk-circle .sk-circle7:before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s; }
    .sk-circle .sk-circle8:before {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s; }
    .sk-circle .sk-circle9:before {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s; }
    .sk-circle .sk-circle10:before {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s; }
    .sk-circle .sk-circle11:before {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s; }
    .sk-circle .sk-circle12:before {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s; }
    @-webkit-keyframes sk-circleBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
    }
    @keyframes sk-circleBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
    }
</style>
