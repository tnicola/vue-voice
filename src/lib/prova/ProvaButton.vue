<template>
    <div>
        <button @click="writeSomething()" class="custom-button">Prova</button>
        <div>{{ message }}</div>
    </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import Component from 'vue-class-component';


@Component({
  // All component options are allowed in here
  template: '<button @click="onClick">Click!</button>'
})
export default class ProvaButton extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'

  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}
</script>

<style lang="sass">
.custom-button
    background-color: blue
    color: white
</style>
