<template>
  <div class="chat-app">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" :class="message.role">
        <HCBIcon glyph="bob" v-if="message.role == 'assistant'" />
        <p>{{ message.content[0].text }}</p>
      </div>
    </div>
    <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Type your message...">
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
import axios from 'axios';
import HCBIcon from "@/components/HCBIcon.vue"
export default {
  components:{
    HCBIcon
  },
  data() {
    
    return {
      userMessage: '',
      messages: []
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage.trim()) return;


      this.messages.push({
        role: 'user',
        content: [{ type: 'text', text: this.userMessage }]
      });


      const data = {
        model: 'gpt-4o',
        messages: this.messages,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        response_format: { type: 'text' }
      };

      try {

        const apiKey = localStorage.getItem('apiKey');

        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        })
        alert(JSON.stringify(response.data))
        this.messages.push({
          role: 'assistant',
          content: response.data.choices[0].message.content
        });
      } catch (error) {
        console.error('Error sending message:', error);
        this.messages.push({
          role: 'assistant',
          content: error
        });
      }

      this.userMessage = '';
    }
  }
};
</script>

<style scoped>
.chat-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 10px;
 
}
.messages {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 10px;
}
.user, .assistant {
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.user {
  
  text-align: right;
}
.assistant {
  
}

</style>