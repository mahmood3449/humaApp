<template>
  <div class="adduser">
      <h3 class="adduser__title">فرم ثبت نام کارمند جدید</h3>
      <form class="adduser__form" v-on:submit.prevent="sendDataUser()">
          <div class="adduser__form-familly">
              <div class="adduser__form-familly-label">
                  <label> نام</label>
              </div>
              <div class="adduser__form-familly-input">
                  <input type="text" v-model="userData.name">
              </div>
          </div>
          <div class="adduser__form-name">
              <div class="adduser__form-name-label">
                  <label>نام خانوادگی </label>
              </div>
              <div class="adduser__form-name-input">
                  <input type="text" v-model="userData.familly">
              </div>
          </div>
          <div class="adduser__form-age">
              <div class="adduser__form-age-label">
                  <label> سن</label>
              </div>
              <div class="adduser__form-age-input">
                  <input type="text" v-model="userData.age">
              </div>
          </div>
          <div class="adduser__form-PersonnelCode">
              <div class="adduser__form-PersonnelCode-label">
                  <label> کد پرسنلی</label>
              </div>
              <div class="adduser__form-PersonnelCode-input">
                  <input type="text" v-model="userData.PersonnelCode">
              </div>
          </div>
          <div class="adduser__form-job">
              <div class="adduser__form-job-label">
                  <label> شغل</label>
              </div>
              <div class="adduser__form-job-input">
                  <input type="text" v-model="userData.job">
              </div>
          </div>
          <div class="adduser__form-part">
              <div class="adduser__form-part-label">
                  <label> قسمت</label>
              </div>
              <div class="adduser__form-part-input">
                  <input type="text" v-model="userData.part">
              </div>
          </div>
          <div class="adduser__form-submit">
              <input type="submit" value="ثبت نام">
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: 'AddUser',
    data(){
        return{
            userData:{
                name: null ,
                familly: null , 
                age: null ,
                PersonnelCode: null ,
                job: null , 
                part: null ,
                Presence: true ,
                Leave: false ,
                id: null
            }
        }
    } ,
    computed:{
        getUsers(){
            return this.$store.state.Employees;
    }
    } ,
    methods:{
        sendDataUser(){
           this.userData.id = this.$store.getters.getEmployees.length;
           this.userData.id +=1;
           this.$store.commit('addNewUser' , this.userData);
           this.$router.push({name: 'Home'})
            console.log(this.userData);
        }
    }

}
</script>

<style lang="scss" scoped>
    .adduser{
        width: 50%;
        margin: auto;
        &__title{
            padding: 1rem;
            text-align: center;
            border-bottom: 1px solid rgba(128, 128, 128, 0.301);
        }
        &__form{
            display: grid;
            grid-template-columns: repeat(1 , 1fr);
            text-align: right;
            // border: 1px solid black;
            &-familly , &-name , &-age , &-PersonnelCode , &-job , &-part{
                &-label{
                        text-align: center;
                    }
                padding: 0rem 1rem;
                &-input{
                    text-align: center;
                    input{
                        width: 70%;
                        padding: 0.3rem 0.5rem;
                        border-radius: 5px;
                        border: 1px solid rgba(128, 128, 128, 0.301);
                        outline: none;
                        text-align: right;
                    }
                }
                // border: 1px solid black;
            }
            &-familly{
                padding-top: 0.5rem;
            }
             &-submit{
                     padding: 1rem 0;
                    //  border: 1px solid black;
                     text-align: center;
                     input{
                         padding: 0.3rem 0;
                         width: 50%;
                         background: rgba(0, 128, 0, 0.699);
                         border: none;
                         border-radius: 5px;
                         color: white;
                     }
                 }
        }
    }
</style>