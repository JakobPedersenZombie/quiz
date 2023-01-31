
<template>
  <div>
    <div>
      <h1>Welcome to the Quiz App</h1>
      <LoginForm />
      <RandomUserGenerator />
    </div>
  </div>
</template>

<script>
import RandomUserGenerator from './RandomUserGenerator.vue'
import LoginForm from './LoginForm.vue'


export default {
  name: 'StartPage',
  components: {
    LoginForm,
    RandomUserGenerator
  },
  created() {
    this.$store.commit('updateRandomUser', null);
  }
};
</script>