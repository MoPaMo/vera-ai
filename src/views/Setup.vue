<template>
  <div class="container">
    <h1>Setup</h1>
    <p>Setting up, please wait...</p>
    <div class="spinner"></div>
    <button @click="saveAgentId">Complete Setup</button>
  </div>
</template>

<style>
.container {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #42b983;
}

p {
  color: #e0e0e0;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top: 4px solid #42b983;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #369a6e;
}
</style>

<script>
export default {
  methods: {
    async saveAgentId() {
      try {
        const apiKey = localStorage.getItem('apiKey');
        if (!apiKey) {
          throw new Error('API key not found in local storage');
        }

        const response = await fetch('https://api.openai.com/v1/assistants', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          },
          body: JSON.stringify({
            instructions: "You are an OSInt Investigator. When asked a question, use general knowledge and publicly available sources to answer the question.",
            name: "Vera.ai",
            tools: [],
            model: "gpt-4o-mini"
          })
        });

        if (!response.ok) {
          throw new Error('Failed to create assistant');
        }

        const data = await response.json();
        const assistantId = data.id;
        localStorage.setItem('agentId', assistantId);

        this.$router.push('/chat');
      } catch (error) {
        console.error('Error creating assistant:', error);
      }
    },
  },
};
</script>