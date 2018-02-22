<template>
  <div>
    <div class="top-nav">
      <button class="toggle-button navigation-toggle" @click="showMenu">
        <span class="toggle-button-menu-text">Menu</span>
        <span class="toggle-icon">
          <span class="toggle-button-icon-bar toggle-button-icon-bar-active-rotate-right"></span>
          <span class="toggle-button-icon-bar toggle-button-icon-bar-active-hide"></span>
          <span class="toggle-button-icon-bar toggle-button-icon-bar-active-rotate-left"></span>
        </span>
      </button>
    </div>
    <div class="show-menu" :class="{showMenuActive: isShowMenu}">
    </div>
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
              <a href="https://www.anchour.com/blog/spotlight-stephen-and-josh" class="hero-cta-btn button button-white-hollow">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <a id="hero-down-arrow" href="#" class="hero-down-arrow"></a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      isShowMenu: true
    }
  },
  created () {
    this.showMenu()
  },
  computed: {
  },
  methods: {
    showMenu () {
     console.log('test');
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '~styles/variable';
  .top-nav {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  .navigation-toggle {
    opacity: 1;
    cursor: pointer;
  }
  .toggle-button {
    transition: .15s ease-in-out;
    background: none;
    border: 0 none;
    color: #fff;
    float: right;
    font-family: Avenir Next W01 Light,Helvetica Neue,helvetica,arial,sans-serif;
    font-size: 15px;
    height: 45px;
    line-height: 1;
    padding: 0;
    position: relative;
    transition-property: color;
    -webkit-appearance: none;
    width: 80px;
    .toggle-button-menu-text {
      position: absolute;
      left: 0;
      top: 15px;
      transition: .15s linear;
    }
    .toggle-icon {
      display: block;
      float: right;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      transition: .15s linear;
    }
  }
  .toggle-button-icon-bar {
    background: #fff;
    border-radius: 2px;
    display: block;
    height: 2px;
    margin: 3px 0;
    width: 21px;
    transition-property: all;
  }
  .show-menu {
    background-color: #000;
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: background-color .1s linear;
    width: 100%;
    will-change: background-color;
    z-index: 300;
  }
  .showMenuActive {
    background-color: #000000!important;
  }
  .my-container {
    width: 100vw;
    height: 100vh;
    background: url('http://otfpsk942.bkt.clouddn.com/cover.jpg') #222 no-repeat 50%;
    background-size: cover;
    color: #fff;
    .row {
      position: relative;
      min-height: 100vh;
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
      font-size: 18px;
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
        will-change: background-color, border-color, color;
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
    height: 30px;
    margin-left: -23px;
    position: absolute;
    width: 47px;
    z-index: 200;
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

  a {
    text-decoration: none;
  }
</style>