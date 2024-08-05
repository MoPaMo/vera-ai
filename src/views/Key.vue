
<template>
  <div>
    <h1>Enter API Key</h1>
    <input v-model="apiKey" placeholder="Enter your API key" />
    <button @click="saveApiKey">Save Key</button>
  </div>
</template>

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