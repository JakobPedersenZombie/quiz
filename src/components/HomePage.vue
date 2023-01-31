<template>
  <div>
  
    <div class="background">
    <div class="question-container">
    <div class="quiz-grid">
    <div class="quiz-container">
    <h1>{{ question.title }}</h1>
    <div class="answers-wrapper">
    <div v-for="answer in question.answers" :key="answer.id">
      <button @click="checkAnswer(answer.id,name)">{{ answer.text }}</button>
    </div></div>
    <p v-if="showAnswer">{{ answerMessage }}</p>
    <div v-if="correctAnswerSelected">
      
      <button v-if="answered" @click="nextQuestion">Next</button></div>
      <div>
        
        <div>Correct Answers: {{ correctAnswers }}</div>
<div>Incorrect Answers: {{ incorrectAnswers }}</div>
    </div>
  
      <chat-component />
    </div>
    
  </div>
  
  </div>
  
  
  </div>
</div>
  
    
</template>


<script>
import ChatComponent from './ChatComponent.vue'
import { mapState } from 'vuex'
import store from '../store'


export default {
  
  data() {
    return {
      
      usedQuestions: [],
      answeredCorrectly: false,
      correctAnswers: 0,
      incorrectAnswers: 0,
      randomUser: {},
      questions: [
        { id: 1, title: "What is the capital of France?", answers: [{ id: 1, text: "Paris", correct: true }, { id: 2, text: "London" }, { id: 3, text: "Berlin" }], answered: false },
        { id: 2, title: "What is the largest planet in our solar system?", answers: [{ id: 4, text: "Jupiter", correct: true }, { id: 5, text: "Saturn" }, { id: 6, text: "Earth" }], answered: false },
        {id: 3, title: "what duck has the most superpowers?", answers: [{id: 7, text: "regular duck", correct: true }, { id: 8, text: "Superduck" }, { id:9, text: "bird"}], answered: false},
         
        { id: 4, title: "What is the meaning of life?", answers: [{ id: 1, text: "43", correct: true }, { id: 2, text: "42" }, { id: 3, text: "41" }], answered: false },
        { id: 5, title: "What color is a banana?", answers: [{ id: 4, text: "Yellow", correct: true }, { id: 5, text: "Green" }, { id: 6, text: "Blue" }], answered: false },
        {id: 6, title: "What color isn't a banana?", answers: [{id: 7, text: "red", correct: true }, { id: 8, text: "Yellow" }, { id:9, text: "brown"}], answered: false},
         
        { id: 7, title: "Who would win in a fight, 3 trillion lions or the sun?", answers: [{ id: 1, text: "Lions", correct: true }, { id: 2, text: "The sun" }, { id: 3, text: "This question is stupid" }], answered: false },
        { id: 8, title: "What tastes the best?", answers: [{ id: 4, text: "Flavor", correct: true }, { id: 5, text: "Falvor" }, { id: 6, text: "Palfor" }], answered: false },
        {id: 9, title: "What year did Doom 1 release?", answers: [{id: 7, text: "1993", correct: true }, { id: 8, text: "1994" }, { id:9, text: "1992"}], answered: false},
         
        { id: 10, title: "What year did 9/11 happen", answers: [{ id: 1, text: "2001", correct: true }, { id: 2, text: "2002" }, { id: 3, text: "2003" }], answered: false },
        { id: 11, title: "How many bowling pins are there in bowling?", answers: [{ id: 4, text: "10", correct: true }, { id: 5, text: "12" }, { id: 6, text: "9" }], answered: false },
        {id: 12, title: "What is the difference between a duck?", answers: [{id: 7, text: "?", correct: true }, { id: 8, text: "?" }, { id:9, text: "?"}], answered: false},
         
        { id: 13, title: "What bullets does a glock19 use?", answers: [{ id: 1, text: "9mm", correct: true }, { id: 2, text: ".357 MAG" }, { id: 3, text: "10mm" }], answered: false },
        { id: 14, title: "What year was the internet developed?", answers: [{ id: 4, text: "1983", correct: true }, { id: 5, text: "1984" }, { id: 6, text: "1985" }], answered: false },
        {id: 15, title: "What year was the first computer made?", answers: [{id: 7, text: "1936", correct: true }, { id: 8, text: "1935" }, { id:9, text: "1934"}], answered: false},
         
        { id: 16, title: "What is SASS?", answers: [{ id: 1, text: "CSS-preprocessor", correct: true }, { id: 2, text: "Compiler" }, { id: 3, text: "Package manager" }], answered: false },
        { id: 17, title: "What does HTML stand for?", answers: [{ id: 4, text: "HyperText Markup Language", correct: true }, { id: 5, text: "HyperText Maker Language" }, { id: 6, text: "HyperText Machine Language" }], answered: false },
        {id: 18, title: "What does CSS stand for?", answers: [{id: 7, text: "Cascading Style Sheet", correct: true }, { id: 8, text: "Creative Style Sheet" }, { id:9, text: "Create Style, Sheet"}], answered: false},
         
        { id: 19, title: "What is Madness Combat?", answers: [{ id: 1, text: "Animation", correct: true }, { id: 2, text: "A fightning style" }, { id: 3, text: "A Medical condition" }], answered: false },
        { id: 20, title: "What is biggest?", answers: [{ id: 4, text: "House cat", correct: true }, { id: 5, text: "Lion" }, { id: 6, text: "Elephant" }] },
        {id: 21, title: "Who would win in a fight", answers: [{id: 7, text: "Superman", correct: true }, { id: 8, text: "Batman" }, { id:9, text: "Frodo but he only has one arm"}], answered: false},
         
        { id: 22, title: "What is best?", answers: [{ id: 1, text: "Mathilde Kakaomælk", correct: true }, { id: 2, text: "Budget Kakaomælk" }, { id: 3, text: "Chocomel" }], answered: false },
        { id: 23, title: "How many terminator films was arnold the bad guy?", answers: [{ id: 4, text: "2", correct: true }, { id: 5, text: "1" }, { id: 6, text: "3" }], answered: false },
        {id: 24, title: "How many layers of hell is there?", answers: [{id: 7, text: "9", correct: true }, { id: 8, text: "7" }, { id:9, text: "6"}], answered: false},
         
        ],
      question: {},
      showAnswer: false,
      answerMessage: "",
      correctAnswerSelected: false,
      
      
    }
    
  },
  
  components: {
    
    ChatComponent
    
   
  },

  computed: {
   
    
    ...mapState(['correctAnswers']),
  },
  
  store: store,
   
        buttonClicked: false,
        
    

        mounted() {
    // vælger et tilfældigt spørgsmål
    this.question = this.questions[Math.floor(Math.random() * this.questions.length)]
  },
  

  created() {
    
  },

  methods: {
    
    checkAnswer(answerId) {
      
      const selectedAnswer = this.question.answers.find(answer => answer.id === answerId)
      this.showAnswer = true
      
      
      if (selectedAnswer.correct && !this.question.answeredCorrectly) {
        this.answerMessage = "Correct!"
        this.question.answeredCorrectly = true
        this.correctAnswerSelected = true
        this.correctAnswers ++;
        this.$store.commit('updateCorrectAnswers',this.correctAnswers);
        if (this.correctAnswers === 24) {
        this.$router.push('/FinalScore')
        
      }
      
      } else if (!selectedAnswer.correct) {
        this.incorrectAnswers++;
        this.$store.commit('updateinCorrectAnswers',this.incorrectAnswers);
        this.answerMessage = "Nah man that ain't correct, you should know this, try again"
        this.correctAnswerSelected = false
      } else {
        this.answerMessage = "You already answered this question correctly. Next question."
        this.correctAnswerSelected = true
      }
      this.answered = true

      
    },
    
    
    nextQuestion() {
  // venter 1/10 af et sekund før den går til næste spørgsmål
  new Promise(resolve => setTimeout(resolve, 100))
  .then(() => {
    // Filter til allerede brugte spørgsmål
    let remainingQuestions = this.questions.filter(q => !this.usedQuestions.includes(q))

    // tjekker hvor mange spørgsmål der er tilbage
    if(remainingQuestions.length === 0){
      this.usedQuestions = []
      remainingQuestions = this.questions
    }
    // vælger tilfældigt spørgsmål
    this.question = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
    this.usedQuestions.push(this.question);

    // Sætter bolorean værdige tilbage til start værdigerne, så hvert spørgsmål bliver cleared.
    this.buttonClicked = false;
    this.showAnswer = false;
    this.correctAnswerSelected = false;
  });
},

    }
 
  
};
  
</script>



<style lang="scss">
  $primary-color: #2fe44e;

  
    
  
  .quiz-grid {
    display: flex;
    
    
    background-color: $primary-color;
    height: 100%;
  }
  .question-container {
    
    
    width: 650px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: top;
    justify-content: center;
    height: 80vh;
    padding: 10px;
  }
  .answers-container {
    
    display: flex;
    
    grid-gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
  }
  

  
  body {
    background: url( '../assets/bg.png' );
    background-size: auto;
    background-position: center;
  }
  .answers-wrapper {
  display: flex;
  justify-content: center;
  height: 20%;
}
</style>