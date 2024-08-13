<template>
  <div id="app">
    <router-link 
      v-if="shouldShowSettingsIcon" 
      :to="settingsLink" 
      class="settings-icon"
    >
      &#9881;
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    shouldShowSettingsIcon() {
      return true; //this.$route.path !== '/setup';
    },
    settingsLink() {
      return this.$route.path === '/settings' ? '/' : '/settings';
    }
  }
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
  min-height: 100vh;
}

.settings-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.settings-icon:hover {
  color: #33d6a6;
}

a {
  color: #338eda;
}

button {
  background-color: #ec3750;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff8c37;
}
</style>
