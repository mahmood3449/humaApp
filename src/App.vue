<template>
  <div class="container">
    <Header></Header>
    <Nav></Nav>
    <SidBar></SidBar>
    <Main></Main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import SidBar from './components/SidBar.vue';
import Main from './components/Main.vue';
import Header from './components/Header.vue';
export default {
    name: 'App' ,
    components: {
      Nav ,
      SidBar ,
      Main , 
      Header
    }
}
</script>

<style lang="scss">
  .container{
    display: grid;
    grid-template-areas:
    "header header header sidbar" 
    "nav nav nav sidbar"
    "main main main sidbar";
  }
</style>
