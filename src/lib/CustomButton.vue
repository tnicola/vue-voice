<template>
    <div>
        <button @click="writeSomething()" class="custom-button">Prova</button>
        <div>{{ message }}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProvaButton from "./prova/ProvaButton.vue";

import { VueConstructor } from "vue";
// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  components: { ProvaButton },
  template: '<button @click="onClick">Click!</button>'
})
export default class ButtonComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = "Hello!";

  // Component methods can be declared as instance methods
  onClick(): void {
    window.alert(this.message);
  }
}

/*const ButtonComponent = Vue.extend({
  name: "vue-button",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    writeSomething: function() {
      this.message = "Written!";
    }
  },
  created: function() {
    this.message = "Init";
  }
});
export default ButtonComponent;*/
</script>

<style lang="sass">
.custom-button
    background-color: blue
    color: white
</style>
