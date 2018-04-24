<template>
  <div>
    <head-title :title="headTitle" :message="message"></head-title>
    <content-container></content-container>
  </div> 
</template>

<script>
import contentContainer from '../../components/contentContainer/contentContainer'
import headTitle from '../../components/headTitle/headTitle'
export default {
  data () {
    return {
      headTitle: 'my work',
      message: '大时代，hello',
      myWorkInfo: ''
    }
  },
  components: {
    contentContainer,
    headTitle
  }
}
</script>

<style lang="scss" scoped>

</style>


