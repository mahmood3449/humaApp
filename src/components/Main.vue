<template>
  <main class="main">
      <section class="section">
          <router-view></router-view>
      </section>
  </main>
</template>

<script>
export default {
    name: 'Main' ,
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    .main{
        grid-area: main;
        height: 75vh;
        background: $maincolor;
        // border: 1px solid black;
        .section{
            width: 90%;
            height: 73vh;
            margin: 10px auto;
            border-radius: 5px;
            background: $leftmenucolor;
            border: 1px solid rgb(156, 156, 156);
        }
    }
</style>