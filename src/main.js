import Vue from 'vue';
import Vuex from 'vuex';
import {seed} from './assets/seed';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    submissions: seed
  },
  mutations: {
    increment(state, submissionId) {
      state.submissions.find(submission => submission.id === submissionId).votes ++
    }
  }
});

new Vue({
  el: '#app',
  store: store,
  computed: {
    sortedSubmissions () {
      return store.state.submissions.sort((a, b) => {
        return b.votes - a.votes
      });
    }
  },
  methods: {
    upvote(submissionId){
      store.commit('increment', submissionId)
    }
  }
});
