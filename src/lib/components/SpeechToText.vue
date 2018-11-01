<template>
    <div>
        <div @click="onClick()" class="speech-to-text__button-container">
            <img src="../../assets/mic.svg">
        </div>
        <div>{{ speech }}</div>
    </div>
</template>

<script>
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

export default {
  name: "SpeechToText",
  data() {
    return {
      speech: "",
      recognition: {}
    };
  },
  methods: {
    onClick: function() {
      this.recognition.start();
      console.log("Recognition started");
    }
  },
  props: {
    msg: String
  },
  created: function() {
    this.speech = "created";
    this.recognition = new SpeechRecognition();

    this.recognition.lang = "it-IT";
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = event => {
      console.log("Event", event);

      var last = event.results.length - 1;
      this.speech = event.results[last][0].transcript;

      console.log("Confidence: " + event.results[0][0].confidence, this.speech);
    };

    this.recognition.onspeechend = () => {
      this.recognition.stop();
      console.log("Speech end");
    };

    this.recognition.onnomatch = function(event) {
      console.log("I didn't recognise that color.");
    };

    this.recognition.onerror = function(event) {
      console.log("Error occurred in recognition: " + event.error);
    };
  }
};
</script>

<style lang="sass">
.speech-to-text
  &__button-container 
    background-color: #dddddd
    border-radius: 50px
    width: 50px
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
</style>