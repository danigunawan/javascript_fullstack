<template>
      <ul class="nav">
        <NavItem v-bind:navData = "{titulo: 'Active 1', url: 'http://google.com'}"/>
        <NavItem titulo="Active 2" v-bind:navData = "{titulo: 'Active 2', url: 'http://google.com'}"/>
        <li class="nav-item" v-bind:style="{backgroundColor: colorRand, border: 'solid 3px red'}">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        <NavItem v-bind:navData="item" v-for="item in itemsNav" v-bind:key="item.titulo"/>
      </ul>    
</template>

<script>
import NavItem from './NavItem.vue'

//opcional
export default {
  name: 'Nav',
  components:{
    NavItem
  },
  data() {
      return {
          colorRand: '#'+Math.floor(Math.random()*6777215).toString(16),
          itemsNav: [
            {titulo: 'Facebook', url: 'https://fb.com'},
            {titulo: 'WordPress', url: 'https://wp.com'},
            {titulo: 'Twiter', url: 'https://twitter.com'},
          ]
      }
  }
}
</script>

<style>

</style>