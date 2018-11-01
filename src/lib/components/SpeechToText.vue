<template>
    <div>
        <div @click="onClick()" class="speech-to-text__button-container">
            <img src="../../assets/mic.svg">
        </div>
        <div>{{ speech }}</div>
    </div>
</template>

<script>
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

export default {
    name: 'SpeechToText',
    data() {
        return {
            speech: '',
            recognition: {}
        };
    },
    methods: {
        onClick() {
            this.recognition.start();
            console.log('Recognition started');
        }
    },
    props: {
        msg: String
    },
    created() {
        this.speech = 'created';
        this.recognition = new SpeechRecognition();

        this.recognition.lang = 'it-IT';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event) => {
            console.log('Event', event);

            const last = event.results.length - 1;
            this.speech = event.results[last][0].transcript;

            console.log(`Confidence: ${event.results[0][0].confidence}`, this.speech);
        };

        this.recognition.onspeechend = () => {
            this.recognition.stop();
            console.log('Speech end');
        };

        this.recognition.onnomatch = () => {
            console.log("I didn't recognise that color.");
        };

        this.recognition.onerror = (event) => {
            console.log(`Error occurred in recognition: ${event.error}`);
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
