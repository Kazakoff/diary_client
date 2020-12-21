import Vue from "vue";
import Vuex from "vuex";

import Locales from "../locales/locales";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    selectedLocale: "en",
    locale: Locales.en
  },

  mutations: {

      changeLocale(state, lang) {
        for (let key in Locales) {
          if (key === lang) {
            state.locale = Locales[key];
            state.selectedLocale = lang;
          }
        }
      }
      
  }

});