<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SpeechToText />
  </div>
</template>

<script>
// import { CustomButton } from 'vue-voice';
import SpeechToText from './lib/components/SpeechToText.vue';

export default {
  name: 'app',
  components: {
    SpeechToText
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
