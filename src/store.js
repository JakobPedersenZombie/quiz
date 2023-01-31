import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    randomUser:{}

  },
  mutations: {
    updateCorrectAnswers(state, value) {
      state.correctAnswers = value
    },
    updateRandomUser(state, randomUser) {
      state.randomUser = randomUser
  },
  updateinCorrectAnswers(state, value) {
    state.incorrectAnswers = value
  }
}
}
)


