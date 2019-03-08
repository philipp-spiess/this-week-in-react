Hi beautiful people. It’s Friday again which means it’s time for another This Week in React ⚛️.

🔎 eslint-plugin-react-hooks v1.5.0
🐞 New DevTools Architecture Overview
🚀 Scheduling in React
👀 and more!

👉💌 Read the thread below and subscribe at this-week-in-react.org. 👇

---

🔎 The ESLint plugin exhaustive-deps is now in a good shape to be adopted in most projects.

Install eslint-plugin-react-hooks@1.5.0 and report back any issues! A few of the changes can be found in this thread.

https://twitter.com/dan_abramov/status/1103744582074990594

---

🐞 Brian updated the new DevTools Architecture Overview with the goal of minimizing bridge traffic and avoid serialization overhead.

https://github.com/bvaughn/react-devtools-experimental/blob/master/OVERVIEW.md

---

🚀 I wrote an article about why we need Scheduling in React.

Make sure to also check out Dan’s comments.

https://twitter.com/dan_abramov/status/1103768273064259590

---

🌏 (1/2) This week, four new React documentation websites went live:

French: https://fr.reactjs.org/
Russian: https://ru.reactjs.org/
Ukrainian: https://uk.reactjs.org/
Simplified Chinese: https://zh-hans.reactjs.org/

---

🌏 (2/2) At the same time, two new localization repos where added:

Swedish: https://github.com/reactjs/sv.reactjs.org
Thai: https://github.com/reactjs/th.reactjs.org

---

📌 Variables that are defined outside of the render scope (e.g. global variables like window) do not cause a component to re-render when they’re mutated.

This doesn’t play together with the dependency array so the ESLint rule now warns in those cases.

https://github.com/facebook/react/pull/14990

---

⏳ With the introduction of a general purpose scheduler, the individual React renders can now directly call the unified Scheduler APIs.

Read the PR description for a good overview of the current situation!

https://github.com/facebook/react/pull/14984

---

⚠️ React now warns on mounting a component that uses hooks where the dependencies are not an array.

https://github.com/facebook/react/pull/15018

---

⚓️ For the exhaustive-deps ESLint rule, functions that do not capture anything are now treated as static. Even if they close over a setState() function that comes from the useState() hook.

https://github.com/facebook/react/pull/14996

---

🎣 The ESLint rule will now also enforce a dependencies array when useMemo() or useCallback() is used.

https://github.com/facebook/react/pull/15025

---

📌 React v16.8.4 Patch Release

This release includes a bug fix that sometimes caused a runtime error when DevTools are open

https://github.com/facebook/react/releases/tag/v16.8.4

---

👏 This week, 47 people made their first commit in one of the React repositories.

Thank you to all these amazing people that push React forward every week. You are incredible. 💕

https://git.io/fhA4q

---

With that it’s already time to wrap up another issue.

See you all next week.

👋
