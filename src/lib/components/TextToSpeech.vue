<template>
    <div>
        <button @click="onClick()">Press me</button>
        <div> {{ message }} </div>
    </div>
</template>

<script>
export default {
    name: 'CustomButton',
    data() {
        return { message: '' };
    },
    methods: {
        onClick() {
            this.message = 'Ah';
        }
    },
    props: {
        msg: String
    }
};
</script>

<style>
</style>
