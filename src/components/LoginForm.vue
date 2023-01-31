

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },

  
  methods: {
    async login() {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/home')
      } catch (error) {
        this.$router.push('/home')
        
      }
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="login">
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>