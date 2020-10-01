<template>
  <div>
    <h1>Sam's BTC Wallet</h1>

    <h5>Add Wallet</h5>
    <input v-model="walletName" type="text" name="Add a Wallet">
    <button v-on:click="submitWalletName">Submit</button>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron');
export default {
  name: 'Wallet',
  data: function(){
    return {
      walletName : ""
    }
  },
  methods: {
    submitWalletName: function(){
      ipcRenderer.send("wallet:create", {
        wallet: this.walletName
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
