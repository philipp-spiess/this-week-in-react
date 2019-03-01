⚛️ It’s Friday and you all know what that means: Time for This Week in React.

🌏 Is React Translated Yet? ¡Sí! Sim! はい！
💼 RFC: Focus Management API
⏱ Mock Build of Scheduler
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

💼 Devon Govett (@devongovett) worked on an RFC for a new API to improve focus handling in React.

Feedback welcome!

https://github.com/reactjs/rfcs/pull/109

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

https://git.io/fhA4q

---

And with that we’re wrapping up another week.


I wish you all a wonderful start into the weekend.

👋
