<template>
  <div class="container" >
    <div v-for="info in infos" class="contrent-container" v-show="activeId == info.id" >
      <div class="item-wrapper" v-bind:class="[isfirst?'isfirst':'secondary', info.id]" v-bind:id="info.id" >
        <h3>{{title}}</h3>
        <p>{{desc}}</p>
        <p>{{info.frontId}}</p>
        <a @click="animate(info.frontId)" id="hero-down-arrow"  class="hero-down-arrow"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'aboutMe',
      desc: 'Hello, my name is binginto',
      infos: [{
        id: 't1',
        frontId: 't2'
      }, {
        id: 't2',
        frontId: 't3'
      }, {
        id: 't3',
        frontId: 't4'
      }, {
        id: 't4',
        frontId: 't1'
      }],
      activeId: 't1',
      isfirst: true
    }
  },
  created: function () {
  },
  methods: {
    animate (id) {
      this.activeId = id
      var firstId = this.infos[0].id
      if (id === firstId) {
        this.isfirst = true
      } else {
        this.isfirst = false
      }
      console.log(this.activeId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/hero-down-arrow.scss';
.container {width: 100%; height: 100vh; background: #eee;}
.contrent-container{width: 100%; height: 100vh;}
.item-wrapper { width: 100%; height: 100%;}
.isfirst { position: relative; animation: mymove 1.5s;}
.secondary { position: relative; animation: secondary 1.5s; }
.t1 {background: blue;}
.t2 {background: red;}
.t3 {background: yellow}
.t4 {background: #ccc;}
@keyframes mymove
{
  from {top:-100vh}
  to {top: 0}
}
@keyframes secondary {
  from {top:100vh}
  to {top: 0}
}
</style>


