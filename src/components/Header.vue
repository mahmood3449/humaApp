<template>
  <header class="header">
      <i class="fa-solid fa-power-off"></i><div class="header__login">خروج</div>
  </header>
</template>

<script>
export default {
    name: 'Header' ,
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    .header{
        display: flex;
        grid-area: header;
        height: 5vh;
        background: $maincolor;
        &__login{
            width: 10%;
            padding: 0.1rem 0 0.5rem 0;
        }
        i{
                color: red;
                padding: 0.5rem;
            }
    }
</style>