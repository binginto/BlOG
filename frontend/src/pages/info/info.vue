<template>
  <div>
     <div class="new-container">
       <nav-container></nav-container>
       <state-info></state-info>
    </div>
     <div id="article">
     </div>
  </div>  
</template>

<script>
import 'jquery'
import util from '../util/util'
import navContainer from '../../components/navContainer/navContainer'
import stateInfo from './components/stateInfo'
export default {
  data () {
    return {
      title: 'info'
    }
  },
  created () {
    var id = util.getQueryString('id')
    this.getArticle(id)
  },
  methods: {
    getArticle (id) {
      this.axios.get('v0/article/' + id).then((response) => {
        var data = response.data.data
        $('#article').html(data.content)
      })
    }
  },
  components: {
    navContainer,
    stateInfo
  }
}
</script>

<style lang="scss" scoped>
 @import '~styles/variable';
 .new-container {
    width: 100vw;
    height: 100vh;
    background: url('http://otfpsk942.bkt.clouddn.com/cover.jpg') #222 no-repeat 50%;
    background-size: cover;
    color: #fff;
  }
</style>


