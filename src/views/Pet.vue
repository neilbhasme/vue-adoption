<template>
  <div>
    <h4>Name : {{ animal.name }}</h4>
    <p>Age : {{ animal.age }} years old</p>
    <p>Breed : {{ animal.breed }} ({{ this.$route.params.species }})</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
  /* below mapstate would be similar to this stuff
     cats() {
        return this.$store.state.cats
      }
      */
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    // similar to this.cats for example or this['cats']
    const animalRefed = this[this.$route.params.species][this.$route.params.id]
    this.animal = animalRefed
  }

}
</script>
