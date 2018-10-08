export default {
  siteRoot: "https://this-week-in-react.org",
  getSiteData: () => ({
    title: 'This Week In React',
  }),
  getRoutes: async () => {
    return [
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
}
