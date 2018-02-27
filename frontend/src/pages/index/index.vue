<template>
  <div>
    <div class="new-container">
     <nav-container></nav-container>
     <state-container></state-container>
    </div>
    <content-container></content-container>
  </div>
</template>

<script>
import contentContainer from './components/contentContainer'
import stateContainer from './components/stateContainer'
import navContainer from '../../components/navContainer/navContainer'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    contentContainer,
    stateContainer,
    navContainer
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '~styles/variable';
  @import '~styles/index';
</style>