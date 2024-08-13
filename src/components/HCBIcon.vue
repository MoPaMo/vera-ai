<template>
  <div class="hackclub-icon">
    <img :src="iconUrl" :alt="glyph+ ' icon'" />
  </div>
</template>

<script>
export default {
  name: 'HCBIcon',
  props: {
    color: {
      type: String,
      default:"black"
    },
    glyph: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedColor() {
      if (this.color.startsWith('#')) {
        return this.color.replace('#', '0x');
      }
      return this.color;
    },
    iconUrl() {
      return `https://icons.hackclub.com/api/icons/${this.formattedColor}/${this.glyph}.svg`;
    }
  }
}
</script>

<style scoped>
.hackclub-icon {
  display: inline-block;
}
.hackclub-icon img {
  max-width: 100%;
  height: auto;
}
</style>
