<template>
  <div class="container">
    <h1>Enter API Key</h1>
    <div class="input-group">
      <input v-model="apiKey" placeholder="Enter your API key" />
      <button @click="saveApiKey">Save Key</button>
    </div>
    <div>
      <a href="https://platform.openai.com/api-keys" target="_blank">Get your API key here</a>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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

.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  flex: 1;
  padding: 10px;
  margin: 10px 5px 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #e0e0e0;
  max-width: 70%;
  box-sizing: border-box;
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

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 10px;
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