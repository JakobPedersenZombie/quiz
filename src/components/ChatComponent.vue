<template>
    <div class="chat-container">
      <div class="messages">
        <div class="message" v-for="message in messages" :key="message.id">
          <p class="message-text">{{ message.text }}</p>
        </div>
      </div>
      <div class="input-container">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message here..."/>
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        newMessage: ""
      }
    },
    methods: {
      sendMessage() {
        if (this.newMessage) {
          this.messages.push({ id: Date.now(), text: this.newMessage });
          this.newMessage = "";
        }
      }
    }
  }
  </script>
  
  <style>
  .chat-container {
    position: fixed;
    right: 20px;
    bottom: 20px;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    border: 1px solid black;
    padding: 20px;
    background-color: white;
  }
  
  .messages {
    overflow-y: scroll;
    height: 80%;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  input {
    width: 80%;
    padding: 10px;
    margin-right: 10px;
  }
  
  button {
    padding: 10px;
  }

  .chatbox::-webkit-scrollbar {
    position: absolute;
    right:0 ;
}
  </style>
  