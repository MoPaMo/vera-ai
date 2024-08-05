
<template>
  <div>
    <h1>Setup</h1>
    <p>Setting up, please wait...</p>
    <button @click="saveAgentId">Complete Setup</button>
  </div>
</template>

<script>
export default {
  methods: {
    saveAgentId() {
      localStorage.setItem('agentId', 'placeholder-id');
      this.$router.push('/chat');
    },
  },
};
</script>