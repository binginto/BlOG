<template>
<div>
  <div class="top-nav">
    <button @click="showMenu" class="toggle-button navigation-toggle">
        <span class="toggle-button-menu-text">Menu</span>
        <span class="toggle-icon">
        <span class="toggle-button-icon-bar"></span>
        <span class="toggle-button-icon-bar"></span>
        <span class="toggle-button-icon-bar"></span>
        </span>
    </button>
  </div>
  <div class="show-menu" :class="{showMenuActive: isShowMenu}">
    <div class="top-nav">
        <button @click="showMenu" class="toggle-button navigation-toggle toggle-button-active">
        <span class="toggle-button-menu-text">Menu</span>
        <span class="toggle-icon">
        <span class="toggle-button-icon-bar toggle-button-icon-bar-active-rotate-right"></span>
        <span class="toggle-button-icon-bar toggle-button-icon-bar-active-hide"></span>
        <span class="toggle-button-icon-bar toggle-button-icon-bar-active-rotate-left"></span>
        </span>
        </button>
        </div>
        <div class="my-container">
        <nav class="nav-container">
            <ul class="hide-nav hide-col">
            <li class="nav-item">
                <router-link to="/aboutMe" class="hide-link">About Me</router-link>
            </li>
                <li class="nav-item">
                <router-link to="/myWork" class="hide-link">My Work</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/myBlog" class="hide-link">My Blog</router-link>
            </li>
                <li class="nav-item">
                <router-link to="/contactMe" class="hide-link">Contact Me</router-link>
            </li>
            </ul>
        </nav>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    showMenu () {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/index'

</style>


