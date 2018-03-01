<template>
  <div class="test">
    <div class="head-title">
      <h1>{{title}}</h1>
    </div>
    <div class="state-item">
      <span class="bottom-text">
        <span class="author">{{author}}</span>
        <span class="semi">{{semi}}</span>
        <span class="time">{{time}}</span>
      </span>
      <button @click="back" class="btn"><span>←</span>&nbsp;&nbsp;BACK TO BLOG</button>
    </div>
  </div>  
</template>

<script>
import router from '../../../router'
export default {
  data () {
    return {
      title: 'aboutMe',
      author: 'By Binginto',
      semi: '|',
      time: 'March,4,2017'
    }
  },
  methods: {
    back () {
      router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variable.scss';
.head-title {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
}

h1,h2,h3 {
  font-family: Quarto A,Quarto B,Baskerville,Baskerville Old Face,Hoefler Text,Garamond,Times New Roman,serif;
  font-weight: 800;
}

@media(min-width: 375px) {
  h1 {font-size:42px;}
}

@media(min-width: 405px) {
  h1 {font-size: 50px;}
}

@media(min-width: 768px) {
  h1 { font-size: 62px; }
}


.state-item {
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  font-family: Avenir Next W01 Light,Helvetica Neue,helvetica,arial,sans-serif;
  .bottom-text {
    font-size: 20px;
    .semi {
      padding: 0 10px 0;
    }
  }
}

.btn {
  background: transparent;
  border: 1px #eee solid;
  padding: 1%;
  margin-left: 10vw;
  color: #fff;
  span {
    font-weight: bold;
  }
}
.btn:hover {
  background: $white;
  color: $primary-text;
}
@media(max-width: 768px) {
 .semi {display: none}
 .btn {display: none}
 .author {display: block}
 .time {display: block}
}
</style>


