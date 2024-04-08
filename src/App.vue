<script>
import MainApp from './components/MainApp.vue';
import HeaderApp from './components/HeaderApp.vue';

export default {
  components: {
    MainApp,
    HeaderApp
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>

  <HeaderApp/>

  <RouterView/>
  

</template>

<style></style>
