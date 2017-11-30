<template>
  <div class="hello">
    <input type="text" name="guest">
    <button>确定</button>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  created () {
    this.axios.get('http://127.0.0.1:7001/getdata')
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {color:red;}
</style>
