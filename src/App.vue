<template>
  <div id="app" class="container">
    <router-link 
      v-if="shouldShowSettingsIcon" 
      :to="settingsLink" 
      class="settings-icon"
    >

      <HCBIcon color="white" :glyph="settingsIcon" />
    </router-link>
    <router-view/>
  </div>
</template>

<script>
  import HCBIcon from "@/components/HCBIcon.vue"
export default {
  name: 'App',
  computed: {
    shouldShowSettingsIcon() {
      return true; //this.$route.path !== '/setup';
    },
    settingsLink() {
      return this.$route.path === '/settings' ? '/' : '/settings';
    },
    settingsIcon(){
      return this.$route.path === '/settings' ? 'post-cancel' : 'settings'
    }
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  min-height: 100vh;
  background-color: --dark;
  color: --snow;
  padding-top: 2rem;
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

</style>
