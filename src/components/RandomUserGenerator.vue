<template>
    <div>
      <form @submit.prevent="getRandomProfile">
        <button type="submit">Get Random Profile</button>
      </form>
      <div v-if="profile" class="container">
        <div class="element">
          <p>Name: {{ profile.name.first }} {{ profile.name.last }}</p>
          <p>Email: {{ profile.email }}</p>
          <p>Location: {{ profile.location.city }}, {{ profile.location.state }}, {{ profile.location.country }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      profile: null
    }
  },
  methods: {
    ...mapActions(['setGeneratedProfile']),
    async getRandomProfile() {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        this.profile = response.data.results[0];
      } catch (error) {
        console.error(error);
        this.$store.commit('setGeneratedProfile', this.profile);
      }
    }
  }
}
</script>

<style lang="scss">

$sky-blue: #87CEEB;

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.element {
  width: 50%;
  height: 50%;
  background: $sky-blue;
}
</style>
