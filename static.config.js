export default {
  getSiteData: () => ({
    title: 'This Week In React',
  }),
  getRoutes: async () => [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
}
