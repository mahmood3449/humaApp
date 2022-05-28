import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home.vue';
import Rezome from '../components/Rezome.vue';
import ShowUser from '../components/ShowUser.vue';
import AddUser from '../components/AddUser.vue';
import Edit from '../components/Edit.vue';
Vue.use(VueRouter);

const routes = [
 {path:'/' , component: Home , name: 'Home'} ,
 {path: 'rezome' , component: Rezome , name: 'Rezome'} ,
 {path: 'showuser' , component: ShowUser , name: 'ShowUser'} ,
 {path: 'adduser' , component: AddUser , name: 'AddUser'} ,
 {path: 'edit' , component: Edit , name: 'Edit'}
];

const router = new VueRouter({
  routes,
});

export default router;
