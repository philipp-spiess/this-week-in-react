const glob = require("glob");
const fs = require("fs");

const issues = glob.sync("src/issues/*/index.html").map(parseIssue);
issues.sort(({ issue: a }, { issue: b }) => b - a);

const latestIssue = issues[0].issue;
const firstIssue = issues[issues.length - 1].issue;

export default {
  siteRoot: "https://this-week-in-react.org",
  getSiteData: () => ({
    title: "This Week in React"
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        redirect: "issues/" + latestIssue
      },
      ...issues.map(({ issue, date, html }) => {
        return {
          path: "/issues/" + issue,
          component: "src/containers/Issue",
          async getData() {
            return {
              issue,
              date,
              html,
              isLatest: issue === latestIssue,
              isFirst: issue === firstIssue
            };
          },
          lastModified: utcDate(date)
        };
      }),
      {
        path: "404",
        component: "src/containers/404"
      }
    ];
  }
};

function parseIssue(path) {
  const html = fs.readFileSync(path).toString();
  const match = /This Week in React – Issue (\d+) – (.*)/.exec(html);

  const issue = parseInt(match[1]);
  const date = new Date(match[2]);

  return { issue, date, html };
}

function utcDate(date) {
  return date.toISOString().split("T")[0];
}
