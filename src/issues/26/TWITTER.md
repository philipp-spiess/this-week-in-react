It’s time for another This Week in React ⚛️. Let us get started!

🕹 Internal Event API Experiments Updates
💃 Dancing Between State and Effects
🎚 Enabled warnAboutDeprecatedLifecycles
👀 and more!

👉💌 Subscribe at this-week-in-react.org and read here 👇

---

🕹 Internal Event API Experiments Updates

This week added more parts to the internal event API experiments including event component responder surfaces and SSR support.

https://github.com/facebook/react/pull/15242
https://github.com/facebook/react/pull/15179
https://github.com/facebook/react/pull/15228

---

💃 James Long (@jlongster) started a discussion about ways to combine effects and state changes. Feedback welcome!

https://github.com/facebook/react/issues/15240

---

🎚 React will, starting with the next minor version, warn when deprecated lifecyle methods are used.

You can learn more about this deprecation in this blog post: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

https://github.com/facebook/react/pull/15186

---

🌍 The Turkish localization is now complete, making it the eight complete localization.

https://tr.reactjs.org/

---

⚠️ This PR adds a warning for an infinite useEffect loop caused by calling setState without defining a dependency array or one of the dependencies changes on every render.

https://github.com/facebook/react/pull/15180

---

📌 React v16.8.6 Patch Release

This release includes a fix for useReducer() bailout and a fix for cross-origin iframes in Safari as well as two new warnings related to contextType.

https://github.com/facebook/react/releases/tag/v16.8.6

---

👏 This week, 33 people made their first commit in one of the React repositories.

Thank you to all these amazing people that push React forward every week. You are incredible. 💕

https://git.io/fjT5Q

---

Thank you everyone for following along.

If you have any feedback on how to improve this newsletter, hit reply and type away!

See you next week. 👋
