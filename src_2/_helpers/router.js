import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import exercises from '../exercises/exercises'
import statsUsers from '../exercises/statsUsers'
import statsExercises from '../exercises/statsExercises'
Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
	{ path: '/exercises', component: exercises },
	{ path: '/userstats', component: statsUsers },
	{ path: '/exercisestats', component: statsExercises },
	
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const userPages = ['/login','/','/exercises'];
  const adminPages = ['/login','/','/exercisestats','/userstats'];
  const userRequired = userPages.includes(to.path);
  const adminRequired = adminPages.includes(to.path);
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  const user = JSON.parse(localStorage.getItem('user'));
  const adm = user.admin;

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }
  else if (adm == 0 && !userRequired) {
	return next({ 
      path: '/', 
      query: { returnUrl: to.path } 
    });
  }
  else if (adm == 1 && !adminRequired) {
	return next({ 
      path: '/', 
      query: { returnUrl: to.path } 
    });
  } 

  next();
})