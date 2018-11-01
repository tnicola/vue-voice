<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CustomButton />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { CustomButton } from 'vue-voice';

import * as p from 'vue-tour';

export default {
  name: 'app',
  components: {
    HelloWorld,
    CustomButton
  },
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
