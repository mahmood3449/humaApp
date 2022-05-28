<template>
  <section class="home">
      <div class="home__loader" v-if="loader"><img class="home__loader-img" src="../assets/img/loader.gif" alt="loader"></div>
      <UserData v-else v-for="user in getUsers" :key="user.id" :send-data-user="user" :class="[{Absent : !user.Presence} , {leave : user.Leave} , {Presence : user.Presence}]"></UserData>
        <div class="home__pagination"><button ref="btn" class="home__pagination-btn" v-for="btn in showBtn" :key="btn" v-on:click="changePage($event)">{{btn}}</button></div>
  </section>
</template>

<script>
import UserData from './UserData.vue';
export default {
    name: 'Home',
    data(){
        return{
            rowNumber: 4,
            paginationNumber: 1 ,
            loader: false
        }
    },
    computed:{
        getUsers(){
            let arrayUser = this.$store.state.Employees;
            let start = (this.rowNumber * this.paginationNumber) - this.rowNumber;
            let end = this.rowNumber * this.paginationNumber;
            return arrayUser.slice(start , end);
        } ,
        showBtn(){
            let btnNumber = Math.ceil(this.$store.state.Employees.length / this.rowNumber);
            return btnNumber;
        }
    } ,
    components:{
        UserData
    },
    methods:{
        changePage(e){
             this.paginationNumber = e.target.textContent;
            let arrayBtn = this.$refs.btn;
            for (const btn of arrayBtn) {
                btn.classList.remove('active');
            }
            e.target.classList.add('active');
            this.loader = true;
            setTimeout(() => {
                this.loader = false;
            }, 2000);

        }
    } ,
    mounted(){
        let arrayBtn = this.$refs.btn;
        arrayBtn[0].classList.add('active');
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
.home{
    &__loader{
        text-align: center;
    }
    &__pagination{
        text-align: center;
        width: 50%;
        margin: auto;
        // border: 1px solid black;
        &-btn{
            padding: 0.2rem 1rem;
            margin-right: 1rem;
            border: none;
            border-radius: 2px;
        }
        .active{
            background: $navcolor;
            border: none;
            border-radius: 2px;
            color: $leftmenucolor;
        }
    }
    .Absent{
            background: rgb(255, 169, 169);
        }
        .leave{
            background: rgb(255, 255, 171);
        }
        .Presence{
            background: rgba(132, 255, 132, 0.719);
        }
}
</style>