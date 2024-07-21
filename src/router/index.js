import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import JoinMeeting from '../components/JoinMeeting.vue';
import CreateMeeting from '../components/CreateMeeting.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/join', component: JoinMeeting },
  { path: '/create', component: CreateMeeting }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;










