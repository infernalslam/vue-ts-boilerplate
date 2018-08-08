<template>
  <div class="user-index">
    <h2>Users</h2>
    <div id="nav">
      <router-link :to="{ name: 'user-list'}">Index</router-link>
      | 
      <router-link :to="{ name: 'user-create'}">Create</router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Controller from './controllers/user.index.ctrl';

@Component
export default class Index extends Vue {
  private controller!: Controller;

  constructor() {
    super();
    this.controller = new Controller();
  }
}
</script>

<style lang="scss">
  .menu {
    cursor: pointer;
  }
  .menu:hover {
    color: blue;
  }
</style>

