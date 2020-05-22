export default {
  addPet: ({ commit }, payload) => { // commit object is got from the vuex
    // context.commit which is pulled directly as commit calls a mutation function appendPet passing pet object as its parameter
    commit('appendPet', payload)
  }
}
