<template>
  <div class="chat-app">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" :class="message.role">
        <HCBIcon glyph="bob" v-if="message.role == 'assistant'" />
        <p>{{ message.content[0].text.value }}</p>
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

      const data = {
        "assistant_id": localStorage.getItem('assistantId'),
        "thread": {
          "messages": [
            {
              "role": "user",
              "content": [
                {
                  "type": "text",
                  "text": {
                    "value": this.userMessage
                  }
                }
              ]
            }
          ]
        }
      };

      try {
        const response = await axios.post('https://api.openai.com/v1/threads/runs', data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('apiKey')}`
          }
        });

        const runId = response.data.id;
        const threadId = response.data.thread_id;

        this.messages.push({
          role: 'user',
          content: [
            {
              type: 'text',
              text: {
                value: this.userMessage
              }
            }
          ]
        });

        this.userMessage = '';

        while (true) {
          const response = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('apiKey')}`
            }
          });

          if (response.data.data.length === 0) {
            break;
          }

          this.messages.push(...response.data.data);
        }
      } catch (error) {
        console.error('Error sending message:', error);
        this.messages.push({
          role: 'assistant',
          content: error
        });
      }
    }
  }
};
</script>