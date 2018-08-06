<template>
  <div class="user-create">
    <h3>User Crate</h3>
    <h2>Under Constuction !!</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Controller from './controllers/user.create.ctrl';

@Component
export default class Home extends Vue {
  private controller!: Controller;

  private created() {
    this.controller = new Controller();
  }
}
</script>
