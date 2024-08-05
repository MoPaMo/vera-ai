import { createRouter, createWebHashHistory } from 'vue-router'
import Key from '@/views/Key.vue';
import Setup from '@/views/Setup.vue';
import Chat from '@/views/Chat.vue';
import Settings from '@/views/Settings.vue';

const routes =[
  { path: '/', redirect: '/key' },
  { path: '/key', component: Key },
  { path: '/setup', component: Setup },
  { path: '/chat', component: Chat },
  { path: '/settings', component: Settings },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  const apiKey = localStorage.getItem('apiKey');
  const agentId = localStorage.getItem('agentId');

  if (!apiKey && to.path !== '/key') {
    next('/key');
  } else if (apiKey && !agentId && to.path !== '/setup') {
    next('/setup');
  } else if (apiKey && agentId && to.path !== '/chat') {
    next('/chat');
  } else {
    next();
  }
});

export default router;