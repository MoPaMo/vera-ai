<template>
  <div class="container dark">
    <h1 class="title">Enter API Key</h1>
    <br/>
    <div class="input-group">
      <input v-model="apiKey" placeholder="Enter your API key" />
      <button @click="saveApiKey">Save Key</button>
    </div>
    <br/>
    <div>
      <a href="https://platform.openai.com/api-keys" target="_blank">Get your API key here</a>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style>
  .input-group {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
export default {
  data() {
    return {
      apiKey: '',
      errorMessage: ''
    };
  },
  methods: {
    saveApiKey() {
      if (this.isValidApiKey(this.apiKey)) {
        localStorage.setItem('apiKey', this.apiKey);
        this.$router.push('/setup');
      } else {
        this.errorMessage = 'Invalid API key format. Please enter a valid key.';
      }
    },
    isValidApiKey(key) {
      const apiKeyPattern = /^sk-.+$/;
      return apiKeyPattern.test(key);
    }
  }
};
</script>