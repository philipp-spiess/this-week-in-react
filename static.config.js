const glob = require("glob");
const fs = require('fs');

const issues = glob.sync('src/issues/*/index.html');

issues.map(parseIssue).map(console.log)

export default {
  siteRoot: "https://this-week-in-react.org",
  getSiteData: () => ({
    title: "This Week In React"
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "404",
        component: "src/containers/404"
      }
    ];
  }
};

function parseIssue(path) {
  const html = fs.readFileSync(path).toString();
  const match = /This Week In React – Issue (\d+) – (.*)/.exec(html);

  return [parseInt(match[1]), match[2]]
}
