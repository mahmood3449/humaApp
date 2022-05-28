<template>
  <div class="edit">
      <h3 class="edit__title">فرم ویرایش کارمند</h3>
      <form class="edit__form" v-on:submit="sendEditData()">
          <div class="edit__form-familly">
              <div class="edit__form-familly-label">
                  <label> نام</label>
              </div>
              <div class="edit__form-familly-input">
                  <input type="text" v-model="editUser.name">
              </div>
          </div>
          <div class="edit__form-name">
              <div class="edit__form-name-label">
                  <label>نام خانوادگی </label>
              </div>
              <div class="edit__form-name-input">
                  <input type="text" v-model="editUser.familly">
              </div>
          </div>
          <div class="edit__form-age">
              <div class="edit__form-age-label">
                  <label> سن</label>
              </div>
              <div class="edit__form-age-input">
                  <input type="text" v-model="editUser.age">
              </div>
          </div>
          <div class="edit__form-PersonnelCode">
              <div class="edit__form-PersonnelCode-label">
                  <label> کد پرسنلی</label>
              </div>
              <div class="edit__form-PersonnelCode-input">
                  <input type="text" v-model="editUser.PersonnelCode">
              </div>
          </div>
          <div class="edit__form-job">
              <div class="edit__form-job-label">
                  <label> شغل</label>
              </div>
              <div class="edit__form-job-input">
                  <input type="text" v-model="editUser.job">
              </div>
          </div>
          <div class="edit__form-part">
              <div class="edit__form-part-label">
                  <label> قسمت</label>
              </div>
              <div class="edit__form-part-input">
                  <input type="text" v-model="editUser.part">
              </div>
          </div>
          <div class="edit__form-submit">
              <input type="submit" value=" ویرایش">
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Edit' ,
    data(){
        return{
            editUser:{
                id:  null,
                name: null,
                familly: null ,
                age: null ,
                PersonnelCode : null,
                job: null ,
                part: null , 
                Presence: true ,
                Leave: false
            } ,
        } 
    } ,
    computed:{
        getFindUser(){
           return this.$store.state.editUser;
        }
    } ,
    methods:{
        sendEditData(){
            this.$store.commit('editDataUser' , this.editUser);
        }
    } ,
    mounted(){
        this.editUser.id = this.getFindUser.id;
    }
}
</script>

<style lang="scss" scoped>
.edit{
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