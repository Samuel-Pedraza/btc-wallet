
<template>
  <div id="app">
    <Wallet msg="Sam's BTC Wallet"/>
    <AddAddress  />
    <SendBTC />
  </div>
</template>

<script>
import Wallet from './components/Wallet.vue'
import AddAddress from './components/AddAddress.vue'
import SendBTC from './components/SendBTC.vue'

export default {
  name: 'App',
  components: {
    Wallet,
    AddAddress,
    SendBTC
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

