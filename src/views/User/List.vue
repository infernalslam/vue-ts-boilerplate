<template>
  <div class="user-list">
    <h3>User List</h3>
    {{controller}}
    <ul>
      <li v-for="(user, index) in controller.users">{{user.name}}</li>
    </ul>
    {{test}}
    <input type="text" v-model="test">
    <!-- <button @click="test"></button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Controller from './controllers/user.list.ctrl';

@Component
export default class Home extends Vue {
  public controller!: Controller;
  public test = 'test';
  // constructor() {
  //   super();
  //   this.controller = new Controller();
  // }
  // get viewModel(): any {
  //   if (this.controller) {
  //     console.log('1234', this.controller);
  //     console.log('3333', this.controller.users);
  //     return this.controller.users;
  //   } else {
  //     return 'hello';
  //   }
  //   // return this.controller ? this.controller.users : 'hello';
  // }
  private created() {
    this.controller = new Controller();
    this.controller.fetchUsers();
    console.log(this.controller);
  }
}
</script>
