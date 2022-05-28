<template>
  <aside class="sidbar">
      <div class="sidbar__menuleft">
          <div class="sidbar__menuleft-top"></div>
          <div class="sidbar__menuleft-all"><router-link :to="{name:'Home'}"><p><i class="fa-solid fa-user"></i> کارمندان</p></router-link></div>
          <div class="sidbar__menuleft-rezome"><router-link :to="{name: 'Rezome'}"><p><i class="fa-solid fa-address-card"></i> رزومه</p></router-link></div>
          <div class="sidbar__menuleft-Advertising"><p><i class="fa-solid fa-book-bookmark"></i> آگهی استخدام</p></div>
      </div>
      <div class="sidbar__menuright">
          <!-- <div class="sidbar__menuright-top"></div> -->
          <!-- <div class="sidbar__menuright-close"><p><i class="fa-solid fa-arrow-left"></i></p></div> -->
          <div class="sidbar__menuright-open"><p><i class="fa-solid fa-arrow-right"></i></p></div>
          <div class="sidbar__menuright-all"><router-link :to="{name:'Home'}"><p><i class="fa-solid fa-user"></i></p></router-link></div>
          <div class="sidbar__menuright-rezome"><router-link :to="{name: 'Rezome'}"><p><i class="fa-solid fa-address-card"></i></p></router-link></div>
          <div class="sidbar__menuright-Advertising"><p><i class="fa-solid fa-book-bookmark"></i></p></div>
      </div>
  </aside>
</template>

<script>
export default {
    name: 'SidBar' ,
    data(){
        return{
            showMenuLeft: true,
        }
    } 
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    .sidbar{
        grid-area: sidbar;
        height: 100vh;
        display: flex;
        box-shadow: -5px 0px 15px #6060608a;
        &__menuleft{
            width: 90%;
            height: 100vh;
            &-top{
                background-image: url('../assets/img/wave.png');
                background-size: 100% 15vh;
                background-repeat: no-repeat;
                width: 100%;
                height: 15vh;
            }
            &-all , &-rezome , &-Advertising{
                direction: rtl;
                text-align: right;
                padding: 0.5rem 0;
                a{
                    text-decoration: none;
                    color: black;
                }
                a.router-link-exact-active{
                    text-decoration: none;
                    p{
                        background: $navcolor;
                        color: $leftmenucolor;
                        i{
                            color: $leftmenucolor;
                        }
                    }
                }
                p{
                    width: 90%;
                    border-top-left-radius: 40px;
                    border-bottom-left-radius: 40px;
                    padding: 0.5rem 0;
                }
                i{
                    color:rgb(173, 173, 173);
                    padding-right: 0.5rem;
                }
            }
            .hidden{
                transform: translateX(-100px);
            }
        }
        &__menuright{
            width: 10%;
            height: 100vh;
            background: $rightmenucolor;
            &-top{
                height: 15vh;
            }
            &-all , &-rezome , &-Advertising{
                text-align: right;
                padding: 1.2rem 0;
                p{
                    text-align: center;
                    color: $leftmenucolor;
                }
                a.router-link-exact-active{
                    text-decoration: none;
                    p{
                        background: $leftmenucolor;
                        color: $leftmenucolor;
                        width: 80%;
                        border-radius: 50%;
                        i{
                            color: black;
                        }
                    }
                }
                }
                &-close , &-open{
                    text-align: right;
                    padding: 2.1rem 0;
                    p{
                    text-align: center;
                    color: $leftmenucolor;
                }

                }
        }
    }
</style>