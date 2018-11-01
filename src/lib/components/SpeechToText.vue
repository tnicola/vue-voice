<template>
    <div>
        <div @click="onClick()" speech="" class="speech-to-text__button-container">
            <img src="../../assets/mic.svg">
        </div>
        <div>{{ speech }}</div>
    </div>
</template>

<script>
import SpeechToText from '../services/speech-to-text';

export default {
    name: 'SpeechToText',
    data() {
        return {
            speech: '',
            speechService: {}
        };
    },
    methods: {
        onClick() {
            this.speechService.speak().subscribe((result) => {
                this.speech = result;
                this.$emit('speech', this.speech);
            });
            console.log('speechService started');
        }
    },
    props: {
        msg: String
    },
    created() {
        this.speechService = new SpeechToText();
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
