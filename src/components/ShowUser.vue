<template>
<div>
    <div class="loader" v-if="loader"><img src="../assets/img/loader.gif" alt="loader"></div>
<div class="showuser" v-else>
        <div class="showuser__img"><i class="fa-solid fa-user"></i></div>
        <div class="showuser__title">{{ getDataUserParam.name }} {{ getDataUserParam.familly }}</div>
        <div class="showuser__data">
            <table>
                <tr>
                    <td class="part">قسمت : {{ getDataUserParam.part }} <i class="fa-solid fa-hammer"></i></td>
                    <td class="job">شغل : {{ getDataUserParam.job }} <i class="fa-solid fa-user-doctor"></i></td>
                    <td class="PersonnelCode">{{ getDataUserParam.PersonnelCode }} : شماره پرسنلی <i class="fa-solid fa-arrow-down-9-1"></i></td>
                    <td class="age">{{ getDataUserParam.age }} : سن <i class="fa-solid fa-image-portrait"></i></td>
                </tr>
                <tr>
                    <td class="delete"><button v-on:click="deleteUser(getDataUserParam)">حذف</button></td>
                    <td class="edit"><button v-on:click="goToEdit(getDataUserParam)">ویرایش</button></td>
                    <td class="leaverequst"><button>درخواست مرخصی</button></td>
                    <td>
                        <p v-if="getDataUserParam.Presence" :class="{Presence : getDataUserParam.Presence}">حاضر <i class="fa-solid fa-check-double"></i></p>
                        <p v-else-if="getDataUserParam.Leave" :class="{leave : getDataUserParam.Leave}">مرخصی <i class="fa-solid fa-check"></i></p>
                        <p v-else-if="!getDataUserParam.Presence" :class="{Absent : !getDataUserParam.Presence}">غایب <i class="fa-solid fa-xmark"></i></p>
                    </td>
                </tr>
            </table>
        </div>
  </div>
</div>
  
</template>

<script>
export default {
    name: 'ShowUser' ,
    data(){
        return{
            loader: true
        }
    } ,
    computed:{
        getDataUserParam(){
           return this.$store.state.dataUserParam;
        }
    } ,
    mounted(){
        setTimeout(() => {
            this.loader = false;
        }, 2000);
    } ,
    methods:{
        deleteUser(user){
            this.$store.commit('deleteUser' , user);
        } ,
        goToEdit(user){
            this.$store.commit('changeEditUser' , user);
            this.$router.push({name: 'Edit'});
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/color/color.scss';
    div.showuser{
        margin-top: 3rem;
        &__img{
            width:11%;
            height: 15%;
            border-radius: 50%;
            font-size: 4rem;
            margin: auto;
            background: rgb(240, 240, 240);
            color: rgb(156, 156, 156);
            border: 1px solid rgb(156, 156, 156);
            text-align: center;
        }
        &__title{
            text-align: center;
            padding: 0.5rem;
        }
        &__data{
            text-align: center;
            table , tr , td{
                border-collapse: collapse;
                border: 1px solid rgb(214, 214, 214);
            }
            table{
                width: 90%;
                margin: auto;
                tr{
                    .age{
                        color: rebeccapurple;
                        background: rgba(102, 51, 153, 0.137);
                    }
                    .part{
                        color: rgb(255, 133, 133);
                        background: rgba(255, 133, 133, 0.164);
                    }
                    .job{
                        color: orange;
                        background: rgba(255, 166, 0, 0.253);
                    }
                    .PersonnelCode{
                        color: $navcolor;
                        background: #3f98f73a;;
                    }
                }
            } 
            td{
                padding: 0.5rem;
            }
        }
        .Absent{
            color: rgb(255, 169, 169);
        }
        .leave{
            color: rgb(196, 196, 0);
        }
        .Presence{
            color: rgb(132, 255, 132);
        }
    }
    .leaverequst , .edit , .delete{
        button{
            color: black;
            border: none;
            border-radius: 5px;
            padding: 0.5rem 1rem;
        }
    }
    .leaverequst{
            button{
                background: rgba(255, 166, 0, 0.253);
            }
        }
        .edit{
            button{
                background: rgb(132, 255, 132)!important;
            }
        }
        .delete{
            button{
                background: rgb(255, 169, 169);
                transition: 0.5s;
                &:hover{
                    background: rgba(255, 169, 169, 0.705);
                    color: $leftmenucolor;
                }
            }
        }
    .loader{
             text-align: center;
        }
</style>