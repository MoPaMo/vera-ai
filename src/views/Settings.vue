<template>
  <div>
    <h1>Settings</h1>
    <button @click="resetKeys">Reset Keys</button>
  </div>
</template>

<script>
export default {
  methods: {
    resetKeys() {
      localStorage.removeItem('apiKey');
      localStorage.removeItem('agentId');
      this.$router.push('/setup');
    }
  }
}
</script>

<style>

</style>