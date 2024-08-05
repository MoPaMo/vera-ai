<template>
  <div>
    <h1>Settings</h1>
    <div class="button-wrapper">
      <button @click="resetKeys">Reset Keys &amp; Assistant</button>
      <p class="local-storage-text">{{ apiKey }}</p>
    </div>
    <div class="button-wrapper">
      <button @click="resetAssistant">Reset Assistant</button>
      <p class="local-storage-text">{{ agentId }}</p>
    </div>
    <br/><br/><br/>
    <router-link to="/">
      <button>Cancel</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    apiKey() {
      return localStorage.getItem('apiKey') || 'No API Key';
    },
    agentId() {
      return localStorage.getItem('agentId') || 'No Agent ID';
    }
  },
  methods: {
    resetKeys() {
      localStorage.removeItem('apiKey');
      localStorage.removeItem('agentId');
      this.$router.push('/keys');
    },
    resetAssistant() {
      localStorage.removeItem('agentId');
      this.$router.push('/setup');
    }
  }
}
</script>

<style>
.button-wrapper {
  margin-bottom: 20px;
}

.local-storage-text {
  margin-top: 5px;
  font-size: 0.9em;
  color: #555;
  user-select: all;
}
</style>