<template>
  <div>
    <h5>Send BTC</h5>
  
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
    <div>
      <h6>Choose Amount</h6>
      <input type="number" name="btc_amount">
    </div>
    <div>
      <h6>Paste Address</h6>
      <input type="text" name="to_address">
    </div>
    <div>
      <input type="submit" style="margin-top: 15px;">
    </div>

  </div>
</template>

<script>
const { ipcRenderer } = require('electron');
export default {
  name: 'SendBTC',
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
