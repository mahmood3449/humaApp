<template>
  <nav class="nav">
      <div class="nav__topbox">
          <div class="nav__topbox-btn">
              <button v-on:click="addUser()">افزودن کارمند جدید <i class="fa-solid fa-plus"></i></button>
          </div>
          <div class="nav__topbox-search">
              <input type="text" vlaue="" placeholder="جستجو بر اساس شغل">
          </div>
          <div class="nav__topbox-search">
              <input type="text" vlaue="" placeholder="جستجو بر اساس شماره پرسنلی">
          </div>
          <div class="nav__topbox-search">
              <input type="text" vlaue="" placeholder="جستجو بر اساس نام خانوادگی">
          </div>
      </div>
      <div class="nav__bottombox">
          <div class="nav__bottombox-Leave">{{ getLeave }} : تعداد مرخصی</div>
          <div class="nav__bottombox-Absent">{{ getAbsent }} : تعداد غایبین</div>
          <div class="nav__bottombox-Attendees">{{ getPresence - getLeave }} : تعداد حاضرین</div>
          <div class="nav__bottombox-all">{{getUsers.length}} : تعداد کل کارمندان</div>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Nav' ,
    computed:{
        getUsers(){
            return this.$store.state.Employees;
    },
     getPresence(){
         return this.$store.getters.getPresence;
     } ,
     getAbsent(){
          return this.$store.getters.getAbsent;
     } , 
     getLeave(){
         return this.$store.getters.getLeave;
     }
    },
    methods:{
        addUser(){
            this.$router.push({name: 'AddUser'});
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    .nav{
        grid-area: nav;
        height: 20vh;
        background: $navcolor;
        &__topbox , &__bottombox{
            margin-top: 1rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 0.5rem 0;
            &-btn{
                text-align: center;
                padding: 0 0.3rem;
                button{
                    padding: 0.3rem 0.5rem;
                    font-weight: bold;
                    background: $leftmenucolor;
                    border: none;
                    border-radius: 2px;
                    transition: 0.5s;
                    &:hover{
                        background: rgba(255, 0, 0, 0.712);
                        color: $leftmenucolor;
                    }
                    i{
                        padding: 0 0.3rem;
                        color: $navcolor;
                    }
                }
            }
            &-search{
                text-align: center;
                input{
                    padding: 0.3rem 0.5rem;
                    width: 90%;
                    text-align: right;
                    border-radius: 2px;
                    border: none;
                }
            }
        }
        &__bottombox{
            margin-top: 1rem;
            grid-gap: 0.5rem;
            &-all , &-Attendees , &-Absent{
                padding: 0 0.5rem;
                margin-right: 0.5rem;
                text-align: center;
                color:rgb(204, 204, 204);
                border: 1px solid rgba(204, 204, 204, 0.548);
            }
            &-all{
                background: $leftmenucolor;
                color: black;
            }
            &-Absent{
                background: rgb(255, 169, 169);
                color: black;
            }
            &-Attendees{
                background: rgb(132, 255, 132);
                color: black;
            }
            &-Leave{
                text-align: center;
                border: 1px solid rgba(204, 204, 204, 0.548);
                color: black;
                margin-left: 0.5rem;
                background: rgb(255, 255, 171);
            }
        }
    }
</style>