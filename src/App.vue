<template>
  <div id="app">
    <div class="app__speech-to-text">
      <div class="app__title">
          <img alt="Vue logo" src="./assets/logo.png" width="24">Speech to Text
      </div>
      <div class="app__try-button">
          <SpeechToText class="app__stt-button" @speech="onSpeechReceived($event)"/>
          <textarea class="app__stt-input" placeholder="Prova" v-model="speech"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
// import { SpeechToText } from 'vue-voice';
import SpeechToText from './lib/components/SpeechToText.vue';

export default {
    name: 'app',
    components: {
        SpeechToText
    },
    data() {
        return {
            speech: ''
        };
    },
    methods: {
        onSpeechReceived(speech) {
            console.log('Reveived', speech);
            this.speech = speech;
        }
    }
};
</script>

<style lang='sass'>
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.app
  &__title
    display: flex
    flex-direction: row
    height: 30px
    align-items: center
  &__speech-to-text
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  &__try-button
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  &__stt-button
    padding: 10px 0
  &__stt-input
      border: 1px solid #DDDDDD
      border-radius: 5px
      box-shadow: 1px 1px 6px #AAAAAA
      height: 100px
      width: 500px
      outline: none
      padding: 10px

</style>
