import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state(){
    return{
      Employees: [{
        id: 1 ,
        name: 'محمود',
        familly: 'کریمی' ,
        age: 32 ,
        PersonnelCode : 1234 ,
        job: 'برنامه نویس' ,
        part: 'فنی' ,
        Presence: true ,
        Leave: false
      } , {
        id: 2 ,
        name: 'نغمه',
        familly: 'یوسفی' ,
        age: 31 ,
        PersonnelCode : 12345 ,
        job: 'نویسنده' ,
        part: 'اداری' , 
        Presence: true ,
        Leave: false
      } , {
        id: 3 ,
        name: 'احمد',
        familly: 'کرمی' ,
        age: 32 ,
        PersonnelCode : 123456 ,
        job: 'راننده' ,
        part: 'لجستیک' , 
        Presence: false ,
        Leave: true
      } ,
      {
        id: 4 ,
        name: 'محسن',
        familly: 'جعفری' ,
        age: 32 ,
        PersonnelCode : 1234567 ,
        job: 'نظافتچی' ,
        part: 'خدمات' , 
        Presence: false,
        Leave: true
      } , 
      {
        id: 5 ,
        name: 'قاسم ',
        familly: 'کریمی' ,
        age: 62 ,
        PersonnelCode : 14789 ,
        job: 'مدیرعامل' ,
        part: 'مدیریت' , 
        Presence: false ,
        Leave: false
      } ,
      {
        id: 6 ,
        name: 'جواد',
        familly: 'موسوی' ,
        age: 20 ,
        PersonnelCode : 4478 ,
        job: 'منشی' ,
        part: 'مدیریت' , 
        Presence: false ,
        Leave: false
      } ,
      {
        id: 7 ,
        name: 'اکبر',
        familly: 'مومنی' ,
        age: 28 ,
        PersonnelCode : 14434 ,
        job: 'برنامه نویس' ,
        part: 'فنی' , 
        Presence: true ,
        Leave: false
      } ,
      {
        id: 8 ,
        name: 'امیر',
        familly: 'قلعه نوعی' ,
        age: 48 ,
        PersonnelCode : 12378 ,
        job: 'ترخیص کار' ,
        part: 'خدمات' , 
        Presence: true ,
        Leave: false
      } , 
      {
        id: 9 ,
        name: 'اکبر',
        familly: 'غمخوار' ,
        age: 66 ,
        PersonnelCode : 78944 ,
        job: 'معاون مدیر عامل' ,
        part: 'مدیریت' , 
        Presence: true ,
        Leave: false
      }
    ] ,
    dataUserParam: null , 
    editUser: null
    }
  },
  getters: {
    getEmployees(state){
      return state.Employees;
    } ,
    getPresence(state){
      let sum = 0;
      for (const user of state.Employees) {
          if(user.Presence == true){
            sum +=1;
          }
      }
      return sum;
    } , 
    getAbsent(state){
      let sum = 0;
      for (const user of state.Employees) {
        if(user.Presence != true){
          sum +=1;
        }
    }
    return sum;
    } ,
    getLeave(state){
      let sum = 0;
      for (const user of state.Employees) {
        if(user.Leave == true){
          sum +=1;
        }
    }
    return sum;
    } ,
  },
  mutations: {
    changeDataUserParam(state , userData){
      state.dataUserParam = userData;
    } ,
    addNewUser(state , newUser){
      state.Employees.push(newUser);
    } ,
    deleteUser(state , user){
      state.Employees = state.Employees.filter((element)=>{
        return element != user;
      })
      router.push({name: 'Home'});
    } ,
    changeEditUser(state , user){
      state.editUser = user;
    } ,
    editDataUser(state , editData){
      state.Employees = state.Employees.filter((element)=>{
        return element.id != editData.id;
      })
      state.Employees.push(editData);
    }
  },
  actions: {},
  modules: {},
});
