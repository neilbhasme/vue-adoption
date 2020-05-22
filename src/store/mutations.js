export default {
  // vuex gives us state and we pass payload in this function
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
