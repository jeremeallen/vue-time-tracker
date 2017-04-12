import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Home';
import TimeEntries from '@/components/TimeEntries';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Home',
      component: Hello,
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
    },
    {
      path: '*',
      redirect: '/hello',
    },
  ],
});
