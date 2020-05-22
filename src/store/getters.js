export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => { // filter method takes a function which will give us each pet one at a time and filter cat out of them
      return pet.species === 'cat'
    })
  },
  getAllDogs: (state) => {
    return state.pets.filter((pet) => { // filter method takes a function which will give us each pet one at a time and filter dog out of them
      return pet.species === 'dog'
    })
  }
}
