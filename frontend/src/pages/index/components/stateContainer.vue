<template>
  <div>
    <section class="my-container">
      <div class="row row-vc row-hc row-flat">
        <div class="col">
        <div class="hero-content">
            <h2 class="hero-headline hero-headline-blog">
            Welcome to binginto's home
            </h2>
            <p class="hero-content-blog"></p>
            <div class="hero-cta-wrap">
            <router-link to="/info?id=56ff1630-30b2-11e8-aabe-773a5338e430" class="hero-cta-btn button button-white-hollow">
                Read More
            </router-link>
            </div>
        </div>
        </div>
      </div>
      <a @click="animate" id="hero-down-arrow"  class="hero-down-arrow"></a>
    </section>
  </div>  
</template>

<script>
import 'jquery'
export default {
  data () {
    return {
      title: 'aboutMe'
    }
  },
  methods: {
    animate () {
      var blog = $('#blog').offset().top
      $('html,body').animate({scrollTop: blog}, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variable.scss';
@import '../../../styles/hero-down-arrow.scss';
.my-container {
    width: 100vw;
    max-height: 80vh;
    .row {
      position: relative;
      min-height: 60vh;
      z-index: 100;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      .col {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    .row-vc {
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .row-hc {
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }

  .hero-content {
    text-align: center;
    .hero-headline {
      font-weight: 800;
      font-size: 34px;
      margin: 0;
      font-family: Quarto A, Quarto B, Baskerville, Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, serif;
    }
    .hero-headline-blog {
      font-weight: 700;
      font-size: 46px;
      margin: 0 auto;
      max-width: 950px;
    }
    .hero-cta-wrap {
      margin-top: 50px;
      .hero-cta-btn {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .hero-cta-btn:hover {
        background: $white;
        color: $primary-text;
        text-decoration: none;
      }
      .hero-cta-btn:first-child {
        margin-bottom: 20px;
      }
      .button {
        border: 2px solid transparent;
        background: none;
        color: #999;
        cursor: pointer;
        display: inline-block;
        font-family: Avenir Next LT W01 Demi;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: .2em;
        height: 68px;
        line-height: 1.2;
        padding: 22px 30px;
        text-align: center;
        transition: .1s esse-in-out;
        text-transform: uppercase;
        width: 255px;
        will-change: $white, $white, $primary-text;
      }
      .button-white-hollow {
        background-color: transparent;
        border-color: #fff;
        color: #fff;
      }
    }
  }
</style>


