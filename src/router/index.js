import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Home';
import LogTime from '@/components/LogTime';
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
      subRoutes: {
        '/log-time': {
          component: LogTime,
          name: 'logtime',
        },
      },
    },
    {
      path: '*',
      redirect: '/hello',
    },
  ],
});
