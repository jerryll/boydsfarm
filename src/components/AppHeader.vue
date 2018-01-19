<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link to="/" tag="a" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </router-link>
      <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="menuNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="menuNav" class="navbar-menu" :class="{'is-active': navIsActive}">
      <div class="navbar-start">
        <router-link to="/partsandservice" tag="a" class="navbar-item">Part & Service</router-link>
        <router-link to="/about" tag="a" class="navbar-item">Inventory</router-link>
        <router-link to="/farmsupply" tag="a" class="navbar-item">Farm Supply</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a data-social-network="Twitter" data-social-action="tweet" target="_blank" href="https://twitter.com/boyd99steve">
                <b-icon
                icon="twitter"
                size="is-large"
                type="is-info">
              </b-icon>
              </a>
            </p>
            <p class="control">
              <a href="https://www.facebook.com/boydsfarmsupplyandmotorsports/">
                <b-icon
                icon="facebook"
                size="is-large"
                type="is-info">
              </b-icon>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppHeader',
    data(){
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleMenu: function(){
        this.navIsActive = !this.navIsActive
      }
    }
  }
</script>