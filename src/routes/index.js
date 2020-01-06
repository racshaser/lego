/* eslint-disable global-require */
const routes = {
  path: '',

  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    // {
    //   path: '(.*)',
    //   load: () => import('./not-found'),
    // },
  ],

  async action({ next }) {
    const route = await next();

    route.title = `${route.title ||
    'Untitled Page'} - Budget planner`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
