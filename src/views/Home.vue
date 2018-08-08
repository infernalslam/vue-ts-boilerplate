<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h1>{{name}}</h1>
    <h3>{{email}}</h3>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      name: 'getName',
      email: 'getEmail',
    }),
  },
  methods: {
    ...mapActions({
      setState: 'setState',
    }),
  },
})
export default class Home extends Vue {
  public name!: string;
  public email!: string;
  public setUser!: () => void;
}
</script>
