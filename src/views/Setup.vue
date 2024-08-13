<template>
  <div class="container">
    <h1>Setup</h1>
    <p>{{ statusMessage }}</p>
    <div v-if="loading" class="spinner"></div>
    <div v-if="error">
      <p class="error">{{ error }}</p>
      <button @click="saveAgentId">Retry</button>
      <button @click="resetApiKey">Reset API Key</button>
    </div>
  </div>
</template>

<style>

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


</style>

<script>
export default {
  data() {
    return {
      statusMessage: 'Setting up, please wait...',
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.saveAgentId();
  },
  methods: {
    async saveAgentId() {
      this.statusMessage = 'Setting up, please wait...';
      this.loading = true;
      this.error = null;
      
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
            'OpenAI-Beta': 'assistants=v2',
          },
          body: JSON.stringify({
            instructions: 'You are an OSInt Investigator. When asked a question, use general knowledge and publicly available sources to answer the question.',
            name: 'Vera.ai',
            tools: [],
            model: 'gpt-4o-mini',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create assistant');
        }

        const data = await response.json();
        const assistantId = data.id;
        localStorage.setItem('agentId', assistantId);

        this.$router.push('/chat');
      } catch (error) {
        this.statusMessage = 'Setup failed, please try again.';
        this.error = error.message;
        this.loading = false;
      }
    },
    resetApiKey() {
      localStorage.removeItem('apiKey');
      this.$router.push('/');
    },
  },
};
</script>