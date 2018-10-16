<template>
  <div class="container">
    <div class="item" v-for="i in 6">{{numbers[i-1]}}</div>
    <input v-model="numbers" maxlength="6" type="tel" autofocus="autofocus"/>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        numbers: ''
      }
    },

    methods: {

    },

  }
</script>
<style scoped>
  　　.container {
    position: relative;
    margin: auto;
    height: 80px;
    width: 300px;
    display: flex;
    border: 1px solid blue;
  }

  .item {
    flex-basis: 25%;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
  }
  .item:not(:last-of-type) {
    border-right: 1px solid blue;
  }

  input {
    position: absolute;
    height: 80px;
    opacity: 0;
    left: 0;
    width: 300px;
  }
  </style>
