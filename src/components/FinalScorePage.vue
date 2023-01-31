<template>
   <div class="grid">
   <div>
        <div>
      <h1>Welcome to your bad or good score I dont know</h1>
     
      <div>Correct Answers: {{ correctAnswers }}</div>
      <div>Incorrect Answers: {{ incorrectAnswers }}</div>
    </div></div></div>
  </template>

  <script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['correctAnswers']),
    ...mapState(['incorrectAnswers']),
  },
  
};
  
</script>

<style lang="scss">

$primary-color: #2fe44e;
.grid {
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    background-color: $primary-color;
    height: 100vh;
    grid-area: question;
    width: 450px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
}
</style>