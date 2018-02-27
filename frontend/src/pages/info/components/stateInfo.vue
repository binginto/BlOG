<template>
  <div class="test">
    <div class="head-title">
      <h1>{{title}}</h1>
    </div>
    <div class="state-item">
      <span class="bottom-text">
        <span>{{author}}</span>
        <span>{{semi}}</span>
        <span>{{time}}</span>
      </span>
      <button class="btn">BACK TO BLOG</button>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      title: 'aboutMe',
      author: 'By Binginto',
      semi: '|',
      time: 'March,4,2017'
    }
  }
}
</script>

<style lang="scss" scoped>
.head-title {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
  font-family: Quarto A,Quarto B,Baskerville,Baskerville Old Face,Hoefler Text,Garamond,Times New Roman,serif;
  font-weight: 800;
}
.state-item {
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  font-family: Avenir Next W01 Light,Helvetica Neue,helvetica,arial,sans-serif;
}

.btn {
  background: transparent;
  border: 1px #eee solid;
  margin-left: 10vw;
  color: #fff;
}
</style>


