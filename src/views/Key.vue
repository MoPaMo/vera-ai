
<template>
  <div class="container">
    <h1>Enter API Key</h1>
    <input v-model="apiKey" placeholder="Enter your API key" />
    <button @click="saveApiKey">Save Key</button>
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

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #e0e0e0;
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
  data() {
    return {
      apiKey: '',
    };
  },
  methods: {
    saveApiKey() {
      localStorage.setItem('apiKey', this.apiKey);
      this.$router.push('/setup');
    },
  },
};
</script>