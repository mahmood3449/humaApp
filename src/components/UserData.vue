<template>
  <div class="userdata">
      <div class="userdata__top">
      <div class="userdata__top-img"><i class="fa-solid fa-user"></i></div>
     <p class="userdata__top-title" v-on:click="sendData(sendDataUser)"><router-link :to="{name: 'ShowUser'}">{{ sendDataUser.name }} {{ sendDataUser.familly }}</router-link></p>
      </div>
      <div class="userdata__bottom">
            <div class="userdata__bottom-age"><i class="fa-solid fa-image-portrait"></i> سن : {{ sendDataUser.age }}</div>
            <div class="userdata__bottom-PersonnelCode"><i class="fa-solid fa-arrow-down-9-1"></i> شماره پرسنلی : {{ sendDataUser.PersonnelCode}}</div>
            <div class="userdata__bottom-job"><i class="fa-solid fa-user-doctor"></i> شغل : {{ sendDataUser.job }}</div>
            <div class="userdata__bottom-part"><i class="fa-solid fa-hammer"></i> قسمت : {{ sendDataUser.part }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'UserData' ,
    props:['sendDataUser'] ,
    methods:{
        sendData(userData){
            this.$store.commit('changeDataUserParam' , userData);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    .userdata{
        width: 95%;
        margin: 5px auto;
        padding: 0.5rem;
        direction: rtl;
        border: 1px solid rgb(156, 156, 156);
        border-radius: 5px;
        &__top , &__bottom{
            text-align: center;
            display: flex;
            // border: 1px solid black;
            width: 100%;
            &-img{
                width: 3%;
                height: 50%;
                // margin-top: 0.6rem;
                border-radius: 50%;
                padding: 0.8rem;
                font-size: 1.2rem;
                background: rgb(240, 240, 240);
                color: rgb(156, 156, 156);
                border: 1px solid rgb(156, 156, 156);
            }
            &-title{
                width: 15%;
                padding: 1rem 0;
                a{
                    text-decoration: none;
                    color: black;
                }
                // border: 1px solid green;
            }
        }
        &__bottom{
            margin-top: 0.5rem;
            justify-content: space-between;
            div{
                padding: 0 1rem;
                background: rgb(250, 250, 250);
                border-radius: 5px;
                border: 1px solid rgb(156, 156, 156);
                font-size: 0.8rem;
            }
            &-age{
                i{
                    color: $navcolor;
                }
            }
            &-PersonnelCode{
                i{
                    color: rebeccapurple;
                }
            }
            &-job{
                i{
                    color: rgb(255, 133, 133);
                }
            }
            &-part{
                i{
                    color: orange
                }
            }
        }
    }
</style>