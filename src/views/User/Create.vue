<template>
  <div class="user-create">
    <h3>User Create</h3>
    <!-- <input type="text" v-model="viewModel.title"> -->
    <button id="btn" @click="onBtnClick">Click</button>
    <hr class="line">
    <h3>Created User</h3>
    <h3>{{viewModel.createdUser}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Controller from './controllers/user.create.ctrl';

@Component
export default class Create extends Vue {
  private controller!: Controller;

  constructor() {
    super();
    this.controller = new Controller();
  }

  get viewModel() {
    return this.controller.viewModel;
  }

  public onBtnClick() {
    this.controller.userCreate('noomerzx');
  }
}
</script>

<style lang="scss">
  hr.line {
    margin-top: 30px;
  }
</style>
