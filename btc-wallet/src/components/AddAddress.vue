<template>
  <div>
    <h5>Add Addresses</h5>
  
    <div>
      <label>
        Wallet #1
        <input type="radio" name="wallet">
      </label>
    </div>
    <div>
      <label>
        Wallet #2
        <input type="radio" name="wallet">
      </label>
    </div>
    <div>
      <label>
        Wallet #3
        <input type="radio" name="wallet">
      </label>
    </div>
    <div style="padding-top: 10px;">
      <button>Generate Address</button>
    </div>

  </div>
</template>

<script>
const { ipcRenderer } = require('electron');
export default {
  name: 'AddAddress',
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
