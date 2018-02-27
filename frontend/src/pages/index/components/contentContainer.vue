<template>
  <div id="blog" class="main-container">
    <div  class="main-item two-colums three-colums" v-for="item in info">
      <div class="item" @click="toInfo(item.id)">
        <img :src="item.banner">
        <div class="main-text">
          <h3>{{item.title}}</h3>
          <p>{{item.introduction}}</p>
        </div>
        <div class="bottom-text">
          <div>
          <p class="author">{{item.author}}</p>
          <p class="time">{{item.createdAt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../../router'
import util from '../../util/util'
export default {
  data () {
    return {
      info: [
        {
          banner: 'http://otfpsk942.bkt.clouddn.com/1.jpg',
          title: 'test',
          author: 'By binginto',
          introduction: '简单介绍',
          time: 'March，4，2017'
        },
        {
          banner: 'http://otfpsk942.bkt.clouddn.com/1.jpg',
          title: 'test',
          author: 'By binginto',
          introduction: '简单介绍',
          time: 'March，4，2017'
        },
        {
          banner: 'http://otfpsk942.bkt.clouddn.com/1.jpg',
          title: 'test',
          author: 'By binginto',
          introduction: '简单介绍',
          time: 'March，4，2017'
        },
        {
          banner: 'http://otfpsk942.bkt.clouddn.com/1.jpg',
          title: 'test',
          author: 'By binginto',
          introduction: '简单介绍',
          time: 'March，4，2017'
        }
      ]
    }
  },
  created () {
    this.axios.get('v0/article').then((response) => {
      var data = response.data.data
      var length = data.length
      for (var i = 0; i < length; i++) {
        data[i].createdAt = util.format(data[i].createdAt)
      }
      this.info = response.data.data
    })
  },
  methods: {
    toInfo (id) {
      router.replace('/info?id=' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variable';
.main-container {
  padding: 30px 30px 0 30px;
  margin-right: 30px; 
  background: #eee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 auto;
  width: 100%;
}

  .main-item {
    flex: 0 1 100%;
    max-width: 100%;
    padding: 0 20px 30px;
    background: #eee;
    height: 500px;
    img {
      width: 100%;
      height: 180px;
      border-radius: 15px 15px  0 0;
    }
  }
@media (min-width: 768px) {
  .two-colums {
    flex: 0 1 50%;
    max-width: 50%;
    img {
      width: 100%;
      height: 180px;
    }
  }
}

@media (min-width: 992px) {
  .three-colums {
    flex: 0 1 33.333%;
    max-width: 33.333%;
    img {
      width: 100%;
      height: 180px;
    }
  }
}

.item {
  background: #fff;
  height: 100%;
  border-radius: 15px; 
}

.main-text {
  display: flex;
  padding: 20px 20px 60px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:210px;
  border-bottom: 1px solid #eee;
  h3 {
    width: 100%;
    margin: 0;
  }
  p {
    width:100%;
    margin: 0;
  }
}

.bottom-text {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height:80px;
  div {
    height: 36px;
    text-align: left;
    padding-left: 30px ;
  }
  p {
    width: 100%;
    line-height: 18px;
    font-size:14px;
    margin:0;
  }

}
</style>

