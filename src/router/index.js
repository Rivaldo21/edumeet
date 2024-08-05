import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/Edumeet.vue';
import JitsiMeet from '../components/JitsiMeet.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/jitsiMeet', component: JitsiMeet }, 
  { path: '/create', component: JitsiMeet },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;














