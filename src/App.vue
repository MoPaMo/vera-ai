<template>
  <div id="app">
    <router-link to="/settings" class="settings-icon">&#9881;</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #121212;
  color: #e0e0e0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}

.settings-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #e0e0e0;
  text-decoration: none;
}

.settings-icon:hover {
  color: #42b983;
}
</style>