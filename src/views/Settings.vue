<template>
  <div>
    <h1>Settings</h1>
    <button @click="resetKeys">Reset Keys &amp; Assitant</button>
<br/>
    <button @click="resetAssistant">Reset Assistant</button>


    <br/><br/><br/>
    <router-link to="/">
      <button>Cancel</button>
    </router-link>
  </div>
</template>

<script>
export default {
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

</style>