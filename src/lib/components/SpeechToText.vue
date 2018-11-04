<template>
    <div>
        <div class="speech-to-text__button-container">
            <div @click="onClick()" :class="{ 'speech-to-text__button--speaking': isSpeaking }"
                    class="speech-to-text__button">
                    <img v-if="!isSpeaking" src="../../assets/mic.svg">
                    <img v-if="isSpeaking"
                        class="speech-to-text__stop"
                        src="../../assets/stop.svg">
                </div>
            </div>
    </div>
</template>

<script>
import SpeechToText from '../services/speech-to-text';

export default {
    name: 'SpeechToText',
    data() {
        return {
            isSpeaking: false,
            speech: '',
            speechService: {}
        };
    },
    methods: {
        onClick() {
            this.isSpeaking = true;
            this.speechService.speak().subscribe(
                (result) => {
                    this.speech = result;
                    this.$emit('speech', this.speech);
                    this.isSpeaking = false;
                    // console.log('Result', result);
                },
                (error) => {
                    console.log('Error', error);
                    this.isSpeaking = false;
                },
                () => {
                    this.isSpeaking = false;
                }
            );
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
@keyframes blind
    0%
        background-color: #dddddd
        width: 45px
        height: 45px
    50%
        background-color: white
        width: 50px
        height: 50px

.speech-to-text
    &__button-container
        display: flex
        justify-content: center
        align-items: center
        width: 50px
        height: 50px
    &__button
        box-shadow: 1px 2px 3px
        background-color: #FFFFFF
        border-radius: 50px
        width: 50px
        height: 50px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        &--speaking
            animation-name: blind
            animation-duration: 1.5s
            animation-iteration-count: 1
    &__stop
        width: 16px

</style>
