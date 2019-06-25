<template>
  <div class="container" >
    <div v-for="info in activeInfos" class="contrent-container" v-show="activeId == info.id" >
      <div class="item-wrapper" v-bind:class="[isfirst?'isfirst':'secondary', info.id]" v-bind:id="info.id" >
        <div class="text-wrapper">
          <h3>{{info.title}}</h3>
          <p>{{info.desc}}</p>
        </div>
        <a @click="animate(info.frontId)" id="hero-down-arrow"  class="hero-down-arrow"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infos: [{
        title: '我的故事啦啦啦',
        desc: 'hello,myname is binginto ',
        id: 't1',
        frontId: 't2'
      }, {
        title: '我的爱好',
        desc: '我喜欢吃饭',
        id: 't2',
        frontId: 't3'
      }, {
        title: '我的技能',
        desc: 'hello',
        id: 't3',
        frontId: 't4'
      }, {
        title: '我的生平',
        desc: '你老板',
        id: 't4',
        frontId: 't1'
      }],
      activeInfos: [{
        title: '',
        desc: '',
        id: 't1',
        frontId: 't2'
      }, {
        title: '',
        desc: '',
        id: 't2',
        frontId: 't3'
      }, {
        title: '',
        desc: '',
        id: 't3',
        frontId: 't4'
      }, {
        title: '',
        desc: '',
        id: 't4',
        frontId: 't1'
      }],
      activeId: 't1',
      isfirst: true
    }
  },
  created: function () {
    var that = this
    setTimeout(function () {
      that.titleTimer(that.activeInfos[0], that.infos[0])
    }, 1500)
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
      var trueId = Number(id.substring(1, 2)) - 1
      this.titleTimer(this.activeInfos[trueId], this.infos[trueId])
    },
    titleTimer (activeInfo, info) {
      var i = 1
      var j = 1
      var timer = setInterval(function () {
        activeInfo.title = info.title.substring(0, i)
        i++
        if (activeInfo.title.length === info.title.length) {
          clearInterval(timer)
          var descTimer = setInterval(function () {
            activeInfo.desc = info.desc.substring(0, j)
            j++
            if (activeInfo.desc.length === info.desc.length) {
              clearInterval(descTimer)
            }
          }, 150)
        }
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/hero-down-arrow.scss';
.container {width: 100%; padding:0!important;height: 100vh; background: #eee;}
.contrent-container{width: 100%; height: 100vh;}
.item-wrapper { width: 100%; height: 100%; background:#eee; padding: 5vh 0 0 0;}
.item-wrapper .text-wrapper { width: 80%; padding: 10px; min-height: 75%;  background:#eee; border-radius:10px; margin:0 auto;}
.isfirst { position: relative; animation: mymove 1.5s;}
.secondary { position: relative; animation: secondary 1.5s; }
.t1 {background: #ccc;}
.t2 {background: #ccc;}
.t3 {background: #ccc}
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


