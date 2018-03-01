<template>
  <div>
    <section class="my-container">
      <div class="row row-vc row-hc row-flat">
        <div class="col">
        <div class="hero-content">
            <p class="hero-headline-upper">Hello</p>
            <h2 class="hero-headline hero-headline-blog">
            Welcome to binginto's home
            </h2>
            <p class="hero-content-blog"></p>
            <div class="hero-cta-wrap">
            <router-link to="/info?id=a91d8120-1c73-11e8-8fe0-af82850b1b27" class="hero-cta-btn button button-white-hollow">
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
    .hero-headline-upper {
      font-family: Avenir Next W01 Light, Helvetica Neue, helvetica, arial, sans-serif;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 28px;
      line-height: 28px;
      text-transform: uppercase;
    }
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
  .hero-down-arrow {
    bottom: 80px;
    display: block;
    left: 50%;
    height: 10px;
    margin-left: -23px;
    position: absolute;
    width: 47px;
    z-index: 200;
  }

  @media (max-height:500px) {
    .hero-down-arrow {
      display: none;
    }
  }

  .hero-down-arrow:before {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 38' fill='%23fff'%3E%3Cpath d='M45 38.2c-.9 0-1.7-.3-2.5-.8L1.7 7.3C-.2 6-.5 3.4.8 1.5 2.2-.3 4.7-.7 6.6.6L45 28.9 83.4.6c1.8-1.4 4.4-1 5.8.9 1.4 1.8 1 4.4-.9 5.8L47.5 37.4c-.8.5-1.6.8-2.5.8z'/%3E%3C/svg%3E") no-repeat top;
    background-size: 80% auto;
    content: '';
    display: block;
    height: 16px;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    transition: all .1s ease;
    width: 100%;
  }

</style>


