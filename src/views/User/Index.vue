<template>
  <div class="user-index">
    <router-view></router-view>
    <h2>{{title}}</h2>
    <input type="text" v-model="text">
    <button @click="saveChange(text)">Change</button>
    {{users}}
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
import Controller from './controllers/user.index.ctrl';

export default Controller;
</script>
