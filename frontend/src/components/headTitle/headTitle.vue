<template>
  <div>
    <h3>{{title}}</h3>
    <div>
      {{message}}
    </div>
  </div> 
</template>

<script>
import contentContainer from '../../components/contentContainer/contentContainer'
export default {
  props: {
    title: {
      required: true
    },
    message: {
      default: 'helllo, friend, this is mywork'
    }
  },
  data () {
    return {
      title: 'myWork',
      myWorkInfo: 'hello, friend, this is my work'
    }
  },
  components: {
    contentContainer
  }
}
</script>

<style lang="scss" scoped>

</style>
