<template>
  <div>
    <h3> Cats for Adoption</h3>

    <b-table striped hover :items="cats">
     <template v-slot:cell(name)="data">
        <!-- immediate below line works fine with a-tag also, but another method is to use router-link as used below
        <a :href="`/pets/${data.index}`">{{ data.value }}</a>
        This above line works fine-->
        <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
