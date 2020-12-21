<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="authentication">

    <div id="authentication-form-wrapper">
      <form>

        <div id="authentication-form-header"></div>

        <div>
          <label>{{ msg.username }}</label>
          <input type="text" v-model="details.username" class="uk-input"/>
        </div>

        <div>
          <label>{{ msg.password }}</label>
          <input type="password" v-model="details.password" class="uk-input"/>
        </div>

        <div id="authentication-form-button-group">
          <button class="mui-btn mui-btn--primary"  style="background: #16193b;" @click="authenticate">{{ msg.sign_in }}</button>
        </div>

      </form>
      
    </div>

    <select class="locale uk-select"v-model="selectedLocale" @change="changeLocale">
          <option v-for="locale in locales" v-bind:value="locale.value">{{ locale.name }}</option>
    </select>

    <div class="auth-error" v-if="error">
      <div class="modal-close" @click="hideError"></div>
      <p>{{ msg.auth_error }}</p>
    </div>
	
  </div>
</template>

<script src="./authentication.module.js"></script>

<style>
  #authentication-form-wrapper {
    box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
    width: 300px;
    height: auto;
    margin: 150px auto;
    background: #ffffff;
    font-size: 16px;
  }
  #authentication-form-wrapper form {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  #authentication-form-wrapper input {
    width: 100%;
    height: 40px;
  }
  #authentication-form-wrapper label {
    display: inline-block;
    padding-top: 2px;
  }
  #authentication-form-header {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 8px;
  }
  #authentication-form-button-group {
    /*border: 1px solid red;*/
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #authentication-form-button-group button {
    width: 100%;
    height: 50px;
  }
  #authentication-form-button-group a {
    display: block;
  }
  .auth-error {
    position: absolute; right: 20px; bottom: 20px;
    width: 300px;
    height: 100px;
    border: 1px solid red;
    background: rgba(255,0,0,0.5);
  }
  .auth-error p {
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>