import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import JitsiMeet from '../components/JitsiMeet.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/jitsiMeet', component: JitsiMeet }, // Untuk join meeting
  { path: '/create', component: JitsiMeet }, // Untuk create meeting
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;















