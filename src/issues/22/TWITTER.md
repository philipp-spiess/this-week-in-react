💉️ It’s Friday again which means it’s time for another dose of React news.

📌 eslint-plugin-react-hooks/exhaustive-deps
🤹‍♀️ act() Examples
🗺 RFC: createElement Changes
👀 and more!

👉💌 Read the thread below and subscribe at this-week-in-react.org. 👇

---

🌏 Is React Translated Yet? ¡Sí! Sim! はい！

A new blog post explains the React documentation internationalization effort and mentions the first three live websites:

👉 https://es.reactjs.org/
👉 https://ja.reactjs.org/
👉 https://pt-br.reactjs.org/

https://reactjs.org/blog/2019/02/23/is-react-translated-yet.html

---

⏱ To control the Scheduler queue in test environments, a new mock version of the Scheduler was added.

https://github.com/facebook/react/pull/14964

---

🌎 With the release of the first three localizations (see tweet above), the documentations now also feature a language switcher

https://reactjs.org/languages

---

🛠 To allow a future DevTools version to edit useState hooks, a new overrideHookState function was added to work with react-debug-tools.

https://github.com/facebook/react/pull/14906

---

🌍 With six new internationalization repos added last week, we’re now at a total of 38. This week brings:

👉 https://github.com/reactjs/gu.reactjs.org
👉 https://github.com/reactjs/km.reactjs.org
👉 https://github.com/reactjs/ku.reactjs.org
👉 https://github.com/reactjs/lt.reactjs.org
👉 https://github.com/reactjs/te.reactjs.org
👉 https://github.com/reactjs/ur.reactjs.org

---

⏳ To avoid unnecessary checks to shouldYield, Scheduler callbacks now receive a didTimeout argument.

https://github.com/facebook/react/pull/14931

---

🎣 In the ESLint rule for hooks, it’s now allowed to pass dependencies that are not used inside the effect to the dependency array.

Check out the PR for an example of when this is useful.

https://github.com/facebook/react/pull/14967

---


⚓️ This PR improves messaging for when you try to pass literals with the exhaustive-deps ESLint rule.

Additionally it now warns when ref.current is used in an effect cleanup that it assumes is a component ref.

https://github.com/facebook/react/pull/14930

---

🐛 react-debug-tools is an experimental package for debugging React renderers.

This PR fixes a bug that was causing issues with this package and useContext().

https://github.com/facebook/react/pull/14940

---

📌 The eslint-plugin-react-hooks/exhaustive-deps lint rule now allows you to omit defining constant primitives in the dependencies array if you close over them.

E.g.:

const a = 42;
useEffect(() => {
  console.log(a);
}, []);

https://github.com/facebook/react/pull/14959

---

👏 This week, 55 people made their first commit in one of the React repositories.

Thank you to all these amazing people that help to jump-start our internationalization effort and push React forward every week. You are incredible. 💕

https://git.io/fhFHj

---

With that we’re wrapping up another phenomenal week.

See you all next week!

👋
