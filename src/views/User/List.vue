<template>
  <div class="user-list">
    <h3>User List</h3>
    <ul>
      <li v-for="(user, index) in viewModel.users" :key="index">{{user.fullName()}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Controller from './controllers/user.list.ctrl';

@Component
export default class List extends Vue {
  public controller: Controller;
  constructor() {
    super();
    this.controller = new Controller();
  }

  get viewModel() {
    return this.controller.viewModel;
  }

  private created() {
    this.controller.fetchUsers();
  }
}
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    padding: 0px;
  }
</style>
