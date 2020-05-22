<template>
  <div>
    <h4>Name : {{ animal.name }}</h4>
    <p><b>Age :</b> {{ animal.age }} years old</p>
    <p><b>Breed :</b>{{ animal.breed }} ({{ this.$route.params.species }})</p>
    <p><b>Gender :</b> {{ animal.gender }} </p>
    <p><b>Color :</b> {{ animal.color }}</p>
    <p><b>Weight :</b> {{ animal.weight }} Kgs.</p>
    <p><b>Location :</b> {{ animal.location }}</p>
    <p><b>Notes :</b> {{ animal.notes }}</p>
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
