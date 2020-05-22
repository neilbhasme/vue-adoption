<template>
  <div class="home-view-container">
    <h3>Adopt a new companion for yourself</h3>
    <p>Total Available animals {{ animalsCount }}</p>
    <p>Total Available cats {{ getAllCats.length }}</p>
    <p>Total Available dogs {{ getAllDogs.length }}</p>
    <button @click="togglePetForm" class="btn btn-primary mb-2"> Add new Pet </button>

    <b-form @submit.prevent="handleSubmit" v-if="showHidePetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.breed"
          type="text"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male', 'female']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.color"
          type="text"
          required
          placeholder="Enter color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.weight"
          required
          placeholder="Enter weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Location:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.location"
          type="text"
          required
          placeholder="Enter location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Notes:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.notes"
          type="text"
          required
          placeholder="Enter Notes"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2 mb-5">Submit</b-button>
      <b-button type="reset" variant="danger" class="mb-5">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showHidePetForm: false,
      formData: {
        name: '',
        breed: '',
        gender: null,
        color: '',
        species: null,
        age: 0,
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllDogs',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showHidePetForm = !this.showHidePetForm
    },
    handleSubmit () {
      const { species, name, breed, gender, color, age, weight, location, notes } = this.formData
      const payload = {
        species,
        pet: {
          name,
          breed,
          gender,
          color,
          age,
          weight,
          location,
          notes
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        breed: '',
        gender: null,
        color: '',
        species: null,
        age: 0,
        weight: 0,
        location: '',
        notes: ''
      }
    }
  }
}
</script>
