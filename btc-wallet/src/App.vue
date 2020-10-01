<template>
  <div id="app">
    <Wallet msg="Sam's BTC Wallet"/>
  </div>
</template>

<script>
import Wallet from './components/Wallet.vue'

export default {
  name: 'App',
  components: {
    Wallet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
